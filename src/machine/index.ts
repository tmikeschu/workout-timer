import {
  MachineConfig,
  MachineOptions,
  assign,
  Machine,
  InvokeCallback,
  spawn,
} from "xstate";
import { minsToMS, secsToMS, speakableTime } from "utils";
import {
  AppMachineEvent as Event,
  AppMachineSchema as Schema,
  AppMachineContext as Context,
  LocalStorageKeys,
} from "types";
import AnnouncementMachine from "./announcement";

const defaultTime = Number(
  localStorage.getItem(LocalStorageKeys.DEFAULT_TIME) || minsToMS(6)
);

export const machineConfig: MachineConfig<Context, Schema, Event> = {
  initial: "idle",
  id: "main",
  context: {
    initialTime: defaultTime,
    currentTime: defaultTime,
    announcementTimes: [],
    announcementActor: null,
    startedAt: 0,
  },
  states: {
    idle: {
      on: {
        START: "running",
        RESET: {
          actions: ["reset"],
        },
        SET_TIME: {
          actions: ["setTime", "storeTime"],
        },
        SET_ANNOUNCEMENT_TIMES: {
          internal: false,
          actions: ["setAnnouncements"],
        },
      },
    },
    running: {
      entry: ["announceStart"],
      invoke: [
        { src: "timer", id: "timer" },
        { src: "noSleep", id: "noSleep" },
      ],
      on: {
        "": {
          target: "complete",
          cond: ({ currentTime }): boolean => currentTime <= 0,
        },
        STOP: "idle",
        COUNT_DOWN: {
          actions: ["countDown"],
        },
      },
    },
    complete: {
      entry: ["announceEnd"],
      after: {
        500: "idle",
      },
    },
  },
};

export const machineOptions: Partial<MachineOptions<Context, Event>> = {
  actions: {
    storeTime: (): void => {
      // define "storeTime" in AppMachineProvider
    },

    setAnnouncements: assign<Context, Event>({
      announcementTimes: (context, event) => {
        if (event.type === "SET_ANNOUNCEMENT_TIMES") {
          return event.payload.announcementTimes;
        }
        return context.announcementTimes;
      },
    }),

    setTime: assign<Context, Event>({
      initialTime: (context, event) =>
        event.type === "SET_TIME" ? event.payload.time : context.initialTime,
      currentTime: (context, event) =>
        event.type === "SET_TIME" ? event.payload.time : context.currentTime,
    }),

    countDown: assign<Context, Event>({
      currentTime: (context) => context.currentTime - secsToMS(1),
      announcementActor: (context) =>
        context.announcementTimes
          .filter((announcement) => {
            // plus a second so the announcement happens right at the time shift
            const timeDiff = context.initialTime - context.currentTime + 1000;
            return context.initialTime > context.currentTime &&
              announcement.interval
              ? timeDiff % secsToMS(announcement.time) === 0
              : timeDiff === secsToMS(announcement.time);
          })
          .slice(0, 1)
          .map((announcement) => {
            return spawn(
              AnnouncementMachine.withContext({
                message:
                  announcement.message ||
                  speakableTime(context.currentTime - 1000),
              }),
              announcement.id
            );
          })[0] || null,
    }),

    reset: assign<Context, Event>({
      currentTime: (context) => context.initialTime,
    }),

    announceStart: assign<Context, Event>({
      announcementActor: (context) =>
        context.currentTime === context.initialTime
          ? spawn(
              AnnouncementMachine.withContext({ message: "Let's go" }),
              "letsgo"
            )
          : null,
    }),

    announceEnd: assign<Context, Event>({
      announcementActor: () =>
        spawn(
          AnnouncementMachine.withContext({ message: "Time. Great job!" }),
          "end"
        ),
    }),
  },
  services: {
    noSleep: () => (): (() => void) => {
      return (): void => {
        // define "noSleep" in AppMachineProvider
      };
    },
    plantAnnouncements: () => (): void => {
      // define "plantAnnouncements" in AppMachineProvider
    },
    timer: () => (cb: Parameters<InvokeCallback>[0]): (() => void) => {
      const interval = setInterval(() => {
        cb("COUNT_DOWN");
      }, secsToMS(1));
      return (): void => {
        clearInterval(interval);
      };
    },
  },
};

export default Machine(machineConfig, machineOptions);

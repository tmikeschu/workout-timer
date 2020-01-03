import {
  MachineConfig,
  MachineOptions,
  assign,
  Machine,
  forwardTo,
  send
} from "xstate";
import { minsToMS, secsToMS } from "utils";
import {
  AppMachineEvent as Event,
  AppMachineSchema as Schema,
  AppMachineContext as Context,
  LocalStorageKeys
} from "types";

const defaultTime = Number(
  localStorage.getItem(LocalStorageKeys.DEFAULT_TIME) || minsToMS(6)
);

export const machineConfig: MachineConfig<Context, Schema, Event> = {
  initial: "idle",
  id: "main",
  context: {
    initialTime: defaultTime,
    currentTime: defaultTime,
    announcementTimes: []
  },
  invoke: [
    { src: "announcer", id: "announcer" },
    { src: "noSleep", id: "noSleep" }
  ],
  states: {
    idle: {
      on: {
        START: "running",
        RESET: {
          actions: ["reset"]
        },
        SET_TIME: {
          actions: ["setTime", "storeTime"]
        },
        SET_ANNOUNCEMENT_TIMES: {
          internal: false,
          actions: ["setAnnouncements"]
        }
      }
    },
    running: {
      entry: ["announceStart"],
      invoke: [
        { src: "timer", id: "timer" },
        { src: "plantAnnouncements", id: "plantAnnouncements" }
      ],
      on: {
        "": {
          target: "complete",
          cond: ({ currentTime }): boolean => currentTime <= 0
        },
        STOP: "idle",
        COUNT_DOWN: {
          actions: ["countDown"]
        },
        ANNOUNCE: {
          actions: forwardTo("announcer")
        }
      }
    },
    complete: {
      entry: ["announceEnd"],
      on: {
        ANNOUNCE: {
          actions: forwardTo("announcer")
        }
      },
      after: {
        500: "idle"
      }
    }
  }
};

export const machineOptions: Partial<MachineOptions<Context, Event>> = {
  actions: {
    // define "storeTime" in AppMachineProvider
    setAnnouncements: assign<Context, Event>({
      announcementTimes: (context, event) => {
        if (event.type === "SET_ANNOUNCEMENT_TIMES") {
          return event.payload.announcementTimes;
        }
        return context.announcementTimes;
      }
    }),
    setTime: assign<Context, Event>({
      initialTime: (context, event) =>
        event.type === "SET_TIME" ? event.payload.time : context.initialTime,
      currentTime: (context, event) =>
        event.type === "SET_TIME" ? event.payload.time : context.currentTime
    }),
    countDown: assign<Context, Event>({
      currentTime: context => context.currentTime - secsToMS(1)
    }),
    reset: assign<Context, Event>({
      currentTime: context => context.initialTime
    }),
    announceStart: send<Context, Event>({
      type: "ANNOUNCE",
      payload: { message: "Let's go" }
    }),
    announceEnd: send<Context, Event>({
      type: "ANNOUNCE",
      payload: { message: "Time. Great job!" }
    })
  },
  services: {
    // define "noSleep" in AppMachineProvider
    // define "announcer" in AppMachineProvider
    // define "plantAnnouncements" in AppMachineProvider
    timer: () => (cb): (() => void) => {
      const interval = setInterval(() => {
        cb("COUNT_DOWN");
      }, secsToMS(1));
      return (): void => {
        clearInterval(interval);
      };
    }
  }
};

export default Machine(machineConfig, machineOptions);

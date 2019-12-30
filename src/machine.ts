import { MachineConfig, MachineOptions, assign, Machine } from "xstate";
import { minsToMS, secsToMS } from "./utils";
import {
  AppMachineEvent as Event,
  AppMachineSchema as Schema,
  AppMachineContext as Context
} from "types";

export const machineConfig: MachineConfig<Context, Schema, Event> = {
  initial: "idle",
  id: "main",
  context: {
    initialTime: minsToMS(6),
    currentTime: minsToMS(6),
    announcementTimes: []
  },
  states: {
    idle: {
      on: {
        START: "running",
        RESET: {
          actions: ["reset"]
        },
        SET_TIME: {
          actions: ["setTime"]
        },
        SET_ANNOUNCEMENT_TIMES: {
          internal: false,
          actions: ["setAnnouncements"]
        }
      }
    },
    running: {
      invoke: [
        { src: "timer", id: "timer" },
        { src: "plantAnnouncements", id: "plantAnnouncements" }
      ],
      on: {
        "": {
          target: "idle",
          cond: ({ currentTime }): boolean => currentTime <= 0
        },
        STOP: "idle",
        COUNT_DOWN: {
          actions: ["countDown"]
        }
      }
    }
  }
};

export const machineOptions: Partial<MachineOptions<Context, Event>> = {
  actions: {
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
    })
  },
  services: {
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

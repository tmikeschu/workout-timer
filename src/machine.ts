import { MachineConfig, MachineOptions, assign, Machine } from "xstate";

const secsToMS = (seconds: number): number => seconds * 1000;
const minsToMS = (minutes: number): number => secsToMS(minutes * 60);

type Schema = {
  states: {
    idle: {};
    running: {};
  };
};

type StartEvent = {
  type: "START";
};
type SetTimeEvent = {
  type: "SET_TIME";
  payload: { time: number };
};
type SetNotificationsTimesEvent = {
  type: "SET_NOTIFICATION_TIMES";
  payload: { notificationTimes: NotificationConfig[] };
};
type Event =
  | StartEvent
  | SetTimeEvent
  | SetNotificationsTimesEvent
  | { type: "STOP" }
  | { type: "COUNT_DOWN" }
  | { type: "RESET" };

type NotificationConfig = { time: number; interval: boolean };
type Context = {
  initialTime: number;
  currentTime: number;
  notificationTimes: NotificationConfig[];
};

export const machineConfig: MachineConfig<Context, Schema, Event> = {
  initial: "idle",
  id: "main",
  context: {
    initialTime: minsToMS(6),
    currentTime: minsToMS(6),
    notificationTimes: []
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
        SET_NOTIFICATION_TIMES: {
          internal: false,
          actions: ["setNotifications"]
        }
      }
    },
    running: {
      invoke: [
        { src: "timer", id: "timer" },
        { src: "plantNotifications", id: "plantNotifications" }
      ],
      on: {
        "": {
          target: "idle",
          cond: ({ currentTime }) => currentTime <= 0
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
    setNotifications: assign<Context, Event>({
      notificationTimes: (context, event) => {
        if (event.type === "SET_NOTIFICATION_TIMES") {
          return event.payload.notificationTimes;
        }
        return context.notificationTimes;
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
    timer: () => cb => {
      const interval = setInterval(() => {
        cb("COUNT_DOWN");
      }, secsToMS(1));
      return () => {
        clearInterval(interval);
      };
    },
    plantNotifications: context => () => {
      const timeouts = context.notificationTimes.map(config => {
        const timingFn = config.interval ? setInterval : setTimeout;
        const id = timingFn(() => {
          console.log(new Date().toLocaleString());
        }, secsToMS(config.time));
        return { ...config, id };
      });

      return () => {
        console.log("clear timeouts");
        timeouts.forEach(config => {
          const clearTimingFn = config.interval ? clearInterval : clearTimeout;
          clearTimingFn(config.id);
        });
      };
    }
  }
};

export default Machine(machineConfig, machineOptions);

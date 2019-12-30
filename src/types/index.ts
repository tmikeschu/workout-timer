export type NotificationConfig = {
  time: number;
  interval: boolean;
  message?: string;
};

export type AppMachineSchema = {
  states: {
    idle: {};
    running: {};
  };
};

export type StartEvent = {
  type: "START";
};

export type SetTimeEvent = {
  type: "SET_TIME";
  payload: { time: number };
};

export type SetNotificationsTimesEvent = {
  type: "SET_NOTIFICATION_TIMES";
  payload: { notificationTimes: NotificationConfig[] };
};

export type AppMachineEvent =
  | StartEvent
  | SetTimeEvent
  | SetNotificationsTimesEvent
  | { type: "STOP" }
  | { type: "COUNT_DOWN" }
  | { type: "RESET" };

export type AppMachineContext = {
  initialTime: number;
  currentTime: number;
  notificationTimes: NotificationConfig[];
};

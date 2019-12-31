export type IAnnouncementConfig = {
  id: string;
  time: number;
  interval: boolean;
  message?: string;
};

export type AppMachineSchema = {
  states: {
    idle: {};
    running: {};
    complete: {};
  };
};

export type StartEvent = {
  type: "START";
};

export type SetTimeEvent = {
  type: "SET_TIME";
  payload: { time: number };
};

export type SetAnnouncementTimesEvent = {
  type: "SET_ANNOUNCEMENT_TIMES";
  payload: { announcementTimes: IAnnouncementConfig[] };
};

export type AnnounceEvent = {
  type: "ANNOUNCE";
  payload: { message: string };
};

export type AppMachineEvent =
  | AnnounceEvent
  | StartEvent
  | SetTimeEvent
  | SetAnnouncementTimesEvent
  | { type: "STOP" }
  | { type: "COUNT_DOWN" }
  | { type: "RESET" };

export type AppMachineContext = {
  initialTime: number;
  currentTime: number;
  announcementTimes: IAnnouncementConfig[];
};

export enum LocalStorageKeys {
  DEFAULT_TIME = "defaultTime"
}

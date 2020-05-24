import { Actor } from "xstate";

export type IAnnouncementConfig = {
  id: string;
  time: number;
  interval: boolean;
  message?: string;
};

/* eslint-disable @typescript-eslint/ban-types */
export type AppMachineSchema = {
  states: {
    idle: {};
    running: {};
    complete: {};
  };
};
/* eslint-enable @typescript-eslint/ban-types */

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
  announcementActor: Actor | null;
  startedAt: number;
};

export enum LocalStorageKeys {
  DEFAULT_TIME = "defaultTime",
}

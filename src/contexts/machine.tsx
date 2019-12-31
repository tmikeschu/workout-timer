import React, { ReactElement, Props, Context } from "react";
import { State, Interpreter, interpret } from "xstate";
import { useMachine } from "@xstate/react";
import appMachine from "machine";
import { secsToMS, speakableTime } from "utils";
import {
  AppMachineEvent,
  AppMachineSchema,
  AppMachineContext as AppMachineExtendedState,
  AnnounceEvent,
  LocalStorageKeys
} from "types";

type UseableMachine = [
  State<AppMachineExtendedState, AppMachineEvent>,
  Interpreter<
    AppMachineExtendedState,
    AppMachineSchema,
    AppMachineEvent
  >["send"],
  Interpreter<AppMachineExtendedState, AppMachineSchema, AppMachineEvent>
];

type AppContextState = UseableMachine;

const service = interpret(appMachine);
service.start();
const initialState: AppContextState = [
  service.initialState,
  service.send.bind(service),
  service
];

export const AppMachineContext = React.createContext<AppContextState>(
  initialState
);

export const AppMachineProvider = ({
  children
}: Props<Context<{}>>): ReactElement => {
  const machine = useMachine<AppMachineExtendedState, AppMachineEvent>(
    appMachine,
    {
      actions: {
        storeTime: (_, event): void => {
          if (event.type === "SET_TIME") {
            localStorage.setItem(
              LocalStorageKeys.DEFAULT_TIME,
              String(event.payload.time)
            );
          }
        }
      },
      services: {
        plantAnnouncements: context => (cb): (() => void) => {
          const startedAt = new Date().getTime();
          const getTime = (): number => {
            const now = new Date().getTime();
            // HACK not sure why but without the - 1000 the announcement occurs at
            // the right time but announces a second less than the desired time
            return context.initialTime - (now - startedAt - 1000);
          };

          const timeouts = context.announcementTimes.map(config => {
            const timingFn = config.interval ? setInterval : setTimeout;
            const id = timingFn(() => {
              const message = [speakableTime(getTime()), config.message]
                .filter(Boolean)
                .join(". ")
                .concat(".");

              cb({ type: "ANNOUNCE", payload: { message } });
            }, secsToMS(config.time));
            return { ...config, id };
          });

          return (): void => {
            timeouts.forEach(config => {
              const clearTimingFn = config.interval
                ? clearInterval
                : clearTimeout;
              clearTimingFn(config.id);
            });
          };
        },
        announcer: () => (_, onEvent): (() => void) => {
          const speakable = new SpeechSynthesisUtterance();
          onEvent(event => {
            if (event.type === "ANNOUNCE") {
              speakable.text = (event as AnnounceEvent).payload.message;
              window.speechSynthesis.speak(speakable);
            }
          });
          return (): void => {
            window.speechSynthesis.cancel();
          };
        }
      }
    }
  );

  return (
    <AppMachineContext.Provider value={machine}>
      {children}
    </AppMachineContext.Provider>
  );
};

export const AppMachineConsumer = AppMachineContext.Consumer;

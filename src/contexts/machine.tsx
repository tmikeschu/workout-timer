import React from "react";
import { State, Interpreter } from "xstate";
import { useMachine } from "@xstate/react";
import appMachine from "machine";
import {
  AppMachineEvent,
  AppMachineSchema,
  AppMachineContext as AppMachineExtendedState,
  LocalStorageKeys,
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

export const AppMachineContext = React.createContext<AppContextState | null>(
  null
);

export const AppMachineProvider: React.FC<{
  config?: Parameters<typeof useMachine>[1];
}> = ({ children, config }) => {
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
        },
      },
      services: {
        ...config?.services,
      },
    }
  );

  return (
    <AppMachineContext.Provider value={machine}>
      {children}
    </AppMachineContext.Provider>
  );
};

export const useAppMachine = (): UseableMachine => {
  const machine = React.useContext(AppMachineContext);
  if (!machine) {
    throw new Error("Must be wrapped by AppMachineProvider");
  }
  return machine;
};

export const AppMachineConsumer = AppMachineContext.Consumer;

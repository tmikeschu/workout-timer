import * as React from "react";
import NoSleep from "nosleep.js";
import { render } from "react-dom";
import { ThemeProvider } from "./theme";
import App from "./App";
import { AppMachineProvider } from "contexts/machine";

const rootElement = document.getElementById("root");
const noSleep = new NoSleep();

render(
  <ThemeProvider>
    <AppMachineProvider
      config={{
        services: {
          noSleep: () => (): (() => void) => {
            noSleep.enable();

            return (): void => {
              noSleep.disable();
            };
          },
        },
      }}
    >
      <App />
    </AppMachineProvider>
  </ThemeProvider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register({});

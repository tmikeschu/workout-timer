import * as React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "./theme";
import App from "./App";
import { AppMachineProvider } from "contexts/machine";

const rootElement = document.getElementById("root");
render(
  <ThemeProvider>
    <AppMachineProvider>
      <App />
    </AppMachineProvider>
  </ThemeProvider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.register({});

import * as React from "react";
import { render as tlrRender } from "@testing-library/react";
import { ThemeProvider } from "../theme";
import { AppMachineProvider } from "contexts/machine";

type Render = typeof tlrRender;
export const render = (
  ...args: Partial<Parameters<Render>>
): ReturnType<Render> => {
  return tlrRender(
    <ThemeProvider>
      <AppMachineProvider>{args[0]}</AppMachineProvider>
    </ThemeProvider>,
    args[1]
  );
};

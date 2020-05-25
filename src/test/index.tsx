import * as React from "react";
import { LocalStorageMock } from "@react-mock/localstorage";
import { render as tlrRender } from "@testing-library/react";

import { AppMachineProvider } from "contexts/machine";

import { ThemeProvider } from "../theme";

type Render = typeof tlrRender;
export const render = (
  component: Parameters<Render>[0],
  options: Parameters<Render>[1] = {},
  other: { localStorage: Record<string, string> } = { localStorage: {} }
): ReturnType<Render> => {
  return tlrRender(
    <LocalStorageMock items={other.localStorage}>
      <ThemeProvider>
        <AppMachineProvider>{component}</AppMachineProvider>
      </ThemeProvider>
    </LocalStorageMock>,
    options
  );
};

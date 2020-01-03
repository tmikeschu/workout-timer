import * as React from "react";
import emotionStyled, { CreateStyled } from "@emotion/styled";
import { injectGlobal } from "emotion";
import { ThemeProvider as EmotionProvider } from "emotion-theming";
import { Day, Night } from "./icons";

const colors = {
  white: "#FBFEF9",
  gray: "#F3EFF5",
  black: "#1C2826",
  red: "#ef3054",
  green: "#43AA8B",
  cerullean: "#3454D1",
  lightBlue: "#715AFF",
  darkBlue: "#0E0E52",
  salmon: "#F49390"
};

injectGlobal`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Inconsolata', sans-serif;
    overflow-x: hidden;
  }

  * {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    transition: background-color 300ms;
  }
`;

interface CommonTheme {
  error: string;
  success: string;
}

export type Theme = CommonTheme & {
  background: string;
  body: string;
  primary: string;
  primaryAlt: string;
};

const commonTheme: CommonTheme = {
  error: colors.red,
  success: colors.green
};

const themeLight: Theme = {
  ...commonTheme,
  background: colors.gray,
  body: colors.black,
  primary: colors.salmon,
  primaryAlt: colors.white
};

const themeDark: Theme = {
  ...commonTheme,
  background: colors.black,
  body: colors.white,
  primary: colors.cerullean,
  primaryAlt: colors.white
};

const theme = (mode: ThemeContext["mode"]): Theme =>
  mode === "dark" ? themeDark : themeLight;

interface ThemeContext {
  mode: "dark" | "light";
  setTheme: (mode?: ThemeContext["mode"]) => void;
}

const defaultThemeContext: ThemeContext = {
  mode:
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setTheme: () => {}
};

const ThemeContext = React.createContext(defaultThemeContext);
export const useTheme = (): ThemeContext => React.useContext(ThemeContext);

type UseEffectDarkMode = Pick<ThemeContext, "mode"> & { hasMounted: boolean };
const useEffectDarkMode = (): [
  UseEffectDarkMode,
  React.Dispatch<React.SetStateAction<UseEffectDarkMode>>
] => {
  const state = React.useState<UseEffectDarkMode>({
    mode: defaultThemeContext.mode,
    hasMounted: false
  });
  const [, setThemeState] = state;

  React.useEffect(() => {
    const lsMode = (localStorage.getItem("mode") ||
      "dark") as ThemeContext["mode"];
    setThemeState(state => ({ ...state, mode: lsMode, hasMounted: true }));
  }, [setThemeState]);

  return state;
};

export const ThemeProvider: React.FC<{}> = ({ children }) => {
  const [themeState, setThemeState] = useEffectDarkMode();
  if (!themeState.hasMounted) {
    return <div />;
  }

  const setTheme = (mode?: ThemeContext["mode"]): void => {
    const nextThemes = {
      light: "dark",
      dark: "light"
    };
    if (!mode) {
      mode = nextThemes[themeState.mode] as ThemeContext["mode"];
    }
    localStorage.setItem("mode", mode);
    setThemeState(state => ({ ...state, mode } as UseEffectDarkMode));
  };

  return (
    <EmotionProvider theme={theme(themeState.mode)}>
      <ThemeContext.Provider
        value={{
          mode: themeState.mode,
          setTheme
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionProvider>
  );
};

export const styled = emotionStyled as CreateStyled<Theme>;

const Button = styled.button`
  background-color: transparent;
  border: none;
  svg {
    fill: ${({ theme }): string => theme.body};
  }
`;

export const ThemeSwitch: React.FC<{}> = () => {
  const { mode, setTheme } = React.useContext(ThemeContext);
  return (
    <Button
      onClick={(): void => {
        setTheme();
      }}
    >
      {mode === "light" ? <Day /> : <Night />}
    </Button>
  );
};

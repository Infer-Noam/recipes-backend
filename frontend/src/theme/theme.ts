import {
  createTheme,
  type ThemeOptions,
  type Theme,
} from "@mui/material/styles";

export type ColorMode = "dark" | "light";

export const themeOptions: (colorMode: ColorMode) => ThemeOptions = (
  colorMode
) => ({
  palette: {
    mode: colorMode,
    primary: {
      main: "#ecececff",
    },
  },
});

export const createAppTheme: (colorMode: ColorMode) => Theme = (colorMode) =>
  createTheme(themeOptions(colorMode));

import {
  createTheme,
  type ThemeOptions,
  type Theme,
} from "@mui/material/styles";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

export type ColorMode = "dark" | "light";

export const getColorModeIcon = (colorMode: ColorMode) =>
  colorMode === "light" ? <LightModeIcon /> : <DarkModeIcon />;

declare module "@mui/material/styles" {
  interface Palette {
    border: {
      primary: string;
      secondary: string;
    };
  }

  interface PaletteOptions {
    border?: {
      primary?: string;
    };
  }
}

export const themeOptions: (colorMode: ColorMode) => ThemeOptions = (
  colorMode
) => ({
  palette: {
    mode: colorMode,
    primary: {
      main: "#ecececff",
    },
    border: {
      primary: colorMode === "light" ? "#bdbdbd" : "#616161",
    },
  },
});

export const createAppTheme: (colorMode: ColorMode) => Theme = (colorMode) =>
  createTheme(themeOptions(colorMode));

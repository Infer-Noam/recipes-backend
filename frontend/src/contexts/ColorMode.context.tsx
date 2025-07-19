import React from "react";
import { type ColorMode } from "../theme/theme";

export type ColorModeContextType = {
  colorMode: ColorMode;
  toggleColorMode: () => void;
};
export const ColorModeContext = React.createContext<ColorModeContextType>({
  colorMode: "light",
  toggleColorMode: () => {},
});

export const ColorModeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [colorMode, setColorMode] = React.useState<ColorMode>("light");

  const toggleColorMode = () =>
    setColorMode((prevColorMode) =>
      prevColorMode === "light" ? "dark" : "light"
    );

  const value = React.useMemo(
    () => ({ colorMode, toggleColorMode }),
    [colorMode]
  );

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};

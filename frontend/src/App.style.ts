import type { SxProps, Theme } from "@mui/material";

const mainContainer: SxProps<Theme> = (theme) => ({
  flexGrow: 1,
  padding: 3,
  backgroundColor: theme.palette.background.default,
});

const appContainer: SxProps = {
  display: "flex",
  height: "100dvh",
  width: "100dvw",
};
const drawer: SxProps = {
  width: 255,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 255,
    boxSizing: "border-box",
  },
};

export default { mainContainer, drawer, appContainer };

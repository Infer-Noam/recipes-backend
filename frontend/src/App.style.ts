import type { SxProps, Theme } from "@mui/material";
import { drawerWidth } from "./components/sideDrawer/sideDrawer.style";

const rootLayout: SxProps<Theme> = (theme) => ({
  width: "100dvw",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  backgroundColor: theme.palette.background.default,
});

const contentArea: SxProps<Theme> = (theme) => ({
  width: "100dvw",
  height: "100dvh",
  position: "fixed",
  left: { xs: 0, sm: drawerWidth },
  padding: theme.spacing(3),
  overflow: "auto",
});

export default {
  rootLayout,
  contentArea,
};

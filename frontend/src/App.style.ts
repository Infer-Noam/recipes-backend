import type { SxProps, Theme } from "@mui/material";
import { drawerWidth } from "./components/sideDrawer/sideDrawer.style";

const rootLayout: SxProps = {
  width: "100dvw",
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const contentArea: SxProps<Theme> = (theme) => ({
  width: "100dvw",
  height: "100dvh",
  position: "fixed",
  left: { xs: 0, sm: drawerWidth },
  padding: theme.spacing(3),
  overflow: "auto",
  backgroundColor: theme.palette.background.default,
});

export default {
  rootLayout,
  contentArea,
};

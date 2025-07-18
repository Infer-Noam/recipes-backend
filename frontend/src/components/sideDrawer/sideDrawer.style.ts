import { type SxProps, styled } from "@mui/material";

export const drawerWidth = 245;

const drawer: SxProps = {
  width: drawerWidth,
  flexShrink: 0,
};
const permanentDrawer: SxProps = {
  ...drawer,
  [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
  display: { xs: "none", sm: "block" },
};

const temporaryDrawer: SxProps = {
  ...drawer,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
  },
  display: { xs: "block", sm: "none" },
};

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

export default { permanentDrawer, temporaryDrawer };

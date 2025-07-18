import { type SxProps, type Theme } from "@mui/material";

const appHeader: SxProps<Theme> = (theme) => ({
  width: "100dvw",
  zIndex: {
    xs: theme.zIndex.drawer - 1,
    sm: theme.zIndex.drawer + 1,
  },
});

const menuIconButton: SxProps = {
  mr: 2,
  display: {
    xs: "block",
    sm: "none",
  },
};

export default { appHeader, menuIconButton };

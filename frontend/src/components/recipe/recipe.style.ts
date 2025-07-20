import type { SxProps, Theme } from "@mui/material";

const card: SxProps = { width: "275px", borderRadius: 4 };

const descriptionTypography: SxProps = { color: "text.secondary" };

const methodTypography: SxProps = { marginBottom: 2 };

const tooltip: SxProps = { ml: "auto" };

const chefAvatar: SxProps<Theme> = (theme) => ({
  border: `1.5px solid ${
    theme.palette.mode === "light"
      ? theme.palette.grey[400]
      : theme.palette.grey[700]
  }`,
});

export default {
  card,
  descriptionTypography,
  methodTypography,
  tooltip,
  chefAvatar,
};

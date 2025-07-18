import type { SxProps } from "@mui/material";
import { blue } from "@mui/material/colors";

const card: SxProps = { maxWidth: 345, borderRadius: "12px" };

// To be changed soon
const avatar: SxProps = { bgcolor: blue[500] };

const descriptionTypography: SxProps = { color: "text.secondary" };

const creationDateTypography: SxProps = {};

const methodTypography: SxProps = { marginBottom: 2 };

const stepTypography: SxProps = { marginBottom: 2 };

export default {
  card,
  avatar,
  descriptionTypography,
  creationDateTypography,
  methodTypography,
  stepTypography,
};

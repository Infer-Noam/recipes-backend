import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Typography } from "@mui/material";
import type { FC } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

type RecipeProps = {
  recipeName: string;
  chefName: string;
  creationDate: Date;
  steps: string[];
};
export const Recipe: FC<RecipeProps> = (props) => {
  const nowSeconds = new Date().getSeconds();
  const createdSeconds = props.creationDate.getSeconds();
  const seconds = createdSeconds - nowSeconds;
  const postText = `Posted ${seconds}s ago`;

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            {props.chefName}
          </Typography>
          <Typography variant="h5" component="div">
            {props.recipeName}
          </Typography>

          <Typography variant="body2">{props.steps}</Typography>
          <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
            {postText}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

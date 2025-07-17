import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  Typography,
  IconButton,
  type IconButtonProps,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Styles from "./recipe.style";
import useToggle from "../../hooks/useToggle";
import { type Recipe as RecipeModel } from "../../../../shared/types/recipe.type";

type RecipeProps = {
  recipe: RecipeModel;
};

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export const Recipe: React.FC<RecipeProps> = (props) => {
  const { open, toggle } = useToggle();
  const recipe = props.recipe;

  return (
    <Card sx={Styles.card}>
      <CardHeader
        avatar={
          <Avatar sx={Styles.avatar} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipe.name}
        subheader={`By ${recipe.chef.firstName}`}
      />
      <CardMedia
        component="img"
        height="194"
        image={recipe.imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" sx={Styles.descriptionTypography}>
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" sx={Styles.creationDateTypography}>
          {new Date(recipe.createDate).toDateString()}
        </Typography>

        <ExpandMore
          expand={open}
          onClick={toggle}
          aria-expanded={open}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={Styles.methodTypography}>Method:</Typography>
          {recipe.steps.map((step, index) => (
            <Typography key={index} sx={{ marginBottom: 2 }}>
              {step}
            </Typography>
          ))}
        </CardContent>
      </Collapse>
    </Card>
  );
};

import { Recipe } from "../../components/recipe/recipe";
import { Box, Grid } from "@mui/material";

const recipes = [
  {
    uuid: "x",
    recipeName: "Cake",
    chefName: "Noam Naor",
    creationDate: new Date(),
    steps: [
      "Break 3 eggs in a bowl",
      "Add olive oil",
      "Turn the heat to 6",
      "Wait about 5 minutes",
      "Bonn appetit",
    ],
    imageUrl:
      "https://ts2.mm.bing.net/th?id=OIP.Y0-ld4ksP_ZxfdyMl6OW2QHaE8&pid=15.1",
    descreption: `This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.`,
  },
  {
    uuid: "x2",
    recipeName: "Finland",
    chefName: "Porto erpo",
    creationDate: new Date(),
    steps: [
      "Break away from sweden using any means accessible",
      "Great! Now secretly fortify your eastern border",
      "Quick the russian ae invading. Get into your positions!",
      "Wait about 5 minutes",
      "KILL THEM ALL",
      "ESTABLISH SUOMI!!!",
    ],
    imageUrl:
      "https://th.bing.com/th/id/ODL.c6d1896131f7b0227b53923f19f0e5b3?w=156&h=95&c=10&rs=1&o=6&dpr=1.1&pid=AlgoBlockDebug",
    descreption: `W finland`,
  },
];
const HomePage = () => {
  return (
    <Box>
      <Grid container rowSpacing={2.5} columnSpacing={3.5}>
        {[...recipes, ...recipes, ...recipes].map((recipe) => (
          <Grid>
            <Recipe
              key={recipe.uuid}
              recipeName={recipe.recipeName}
              chefName={recipe.chefName}
              creationDate={recipe.creationDate}
              steps={recipe.steps}
              description={recipe.descreption}
              imageUrl={recipe.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;

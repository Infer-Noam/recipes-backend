import { Recipe } from "../../components/recipe/recipe";
import { Box, Grid } from "@mui/material";
import { useGetRecipes } from "../../hooks/api/useGetRecipes.api";

const HomePage = () => {
  const { data: recipes } = useGetRecipes();

  if (recipes) {
    <Box>
      <Grid container rowSpacing={2.5} columnSpacing={3.5}>
        {recipes.map((recipe) => (
          <Grid key={recipe.uuid}>
            <Recipe recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Box>;
  } else return null;
};

export default HomePage;

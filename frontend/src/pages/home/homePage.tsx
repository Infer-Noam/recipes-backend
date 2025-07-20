import { Recipe } from "../../components/recipe/recipe";
import { Box, Grid } from "@mui/material";
import api from "../../api";
import { type GetAllRecipesRes } from "../../../../shared/http-types/recipe/getAllRecipes.http-type";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { data: recipes } = useQuery({
    queryKey: ["recipeData"],
    queryFn: () =>
      api
        .get<GetAllRecipesRes>("/recipe")
        .then((response) => response.data.recipes),
  });
  if (recipes) {
    return (
      <Box>
        <Grid container rowSpacing={2.5} columnSpacing={3.5}>
          {recipes.map((recipe) => (
            <Grid key={recipe.uuid}>
              <Recipe recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
};

export default HomePage;

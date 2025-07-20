import { Recipe } from "../../components/recipe/recipe";
import { Box, Grid } from "@mui/material";
import api from "../../api";
import { type GetAllRecipesRes } from "../../../../shared/http-types/recipe/getAllRecipes.http-type";
import { type DeleteRecipeReq } from "../../../../shared/http-types/recipe/deleteRecipe.http-type";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Styles from "./homePage";

const HomePage = () => {
  const { data: recipes } = useQuery({
    queryKey: ["recipeData"],
    queryFn: () =>
      api
        .get<GetAllRecipesRes>("/recipe")
        .then((response) => response.data.recipes),
  });

  const queryClient = useQueryClient();

  const deleteRecipe = async (uuid: string) => {
    await api.delete<DeleteRecipeReq>("/recipe", { data: { uuid } });
    queryClient.invalidateQueries({ queryKey: ["recipeData"] });
  };

  const chefSrcArray = [227920, 240413, 227924, 44252, 33158, 218334].map(
    (n) => {
      return `https://www.svgrepo.com/show/${n}/chef.svg`;
    }
  );

  const chefSrc = () =>
    chefSrcArray[Math.floor(Math.random() * chefSrcArray.length)];

  if (recipes) {
    return (
      <Box>
        <Grid
          container
          sx={Styles.gridContainer}
          rowSpacing={2.5}
          columnSpacing={3.5}
        >
          {recipes.map((recipe) => (
            <Grid key={recipe.uuid}>
              <Recipe
                recipe={recipe}
                deleteRecipe={() => {
                  deleteRecipe(recipe.uuid);
                }}
                chefAvatarSrc={chefSrc()}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
};

export default HomePage;

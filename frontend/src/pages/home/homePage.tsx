import { Recipe } from "../../components/recipe/recipe";
import { Box, Grid } from "@mui/material";
import { useGetRecipes } from "../../hooks/api/useGetRecipes.api";
import api from "../../api";
import { type DeleteRecipeReq } from "../../../../shared/http-types/recipe/deleteRecipe.http-type";
import { useQueryClient } from "@tanstack/react-query";
import Styles from "./homePage";
import { USE_GET_RECIPES_KEY } from "../../hooks/api/useGetRecipes.api";

const HomePage = () => {
  const { data: recipes } = useGetRecipes();

  const queryClient = useQueryClient();

  const deleteRecipe = async (uuid: string) => {
    await api.delete<DeleteRecipeReq>("/recipe", { data: { uuid } });
    queryClient.invalidateQueries({ queryKey: [USE_GET_RECIPES_KEY] });
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
  } else return null;
};

export default HomePage;

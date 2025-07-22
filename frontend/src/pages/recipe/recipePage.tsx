import { useParams } from "react-router-dom";
import { useGetRecipeByUuid } from "../../hooks/api/useGetRecipeByUuid.api";
import { useGetIngredients } from "../../hooks/api/useGetIngredients.api";
import { useGetChefs } from "../../hooks/api/useGetChefs.api";
import { RecipeCard } from "../../components/recipeCard/RecipeCard";
import { Box, TextField, Autocomplete, Paper } from "@mui/material";
import { Recipe } from "../../components/recipe/recipe";

const RecipePage = () => {
  const { uuid } = useParams();

  if (!uuid) return null;

  const { data: recipe } = useGetRecipeByUuid(uuid);
  const { data: ingredients } = useGetIngredients();
  const { data: chefs } = useGetChefs();

  if (recipe && ingredients && chefs) {
    return (
      <Box>
        {/* <TextField
          required
          id="outlined-basic"
          label="Recipe name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Autocomplete
          sx={Styles.chefAutocomplete}
          value={chefUuid}
          onChange={(event: any, newValue: string | null) => {
            setChefUuid(newValue);
          }}
          options={chefOptions}
          renderInput={(params) => <TextField {...params} label="Chef" />}
        /> */}

        <Recipe
          recipe={recipe}
          chefs={[]}
          ingredients={ingredients}
          close={() => {}}
          save={() => {}}
          deleteRecipe={() => {}}
        ></Recipe>
      </Box>
    );
  } else return null;
};

export default RecipePage;

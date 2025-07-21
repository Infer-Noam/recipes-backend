import { useParams } from "react-router-dom";
import { useGetRecipeByUuid } from "../../hooks/api/useGetRecipeByUuid.api";
import { RecipeCard } from "../../components/recipeCard/RecipeCard";
import { Box, TextField, Autocomplete, Paper } from "@mui/material";
import { type FC, useState } from "react";

import { type Recipe as RecipeModel } from "../../../../shared/types/recipe.type";
import { type Chef as ChefModel } from "../../../../shared/types/chef.type";
import { type Ingredient as IngredientModel } from "../../../../shared/types/ingredient.type";
import { RecipeIngredientsTable } from "./recipeIngredientTable/RecipeIngredientsTable";

type RecipeProps = {
  recipe: RecipeModel;
  chefs: ChefModel[];
  ingredients: IngredientModel[];
  deleteRecipe: () => void;
  save: () => void;
  close: () => void;
};

export const Recipe: FC<RecipeProps> = ({
  recipe,
  chefs,
  ingredients,
  deleteRecipe,
  save,
  close,
}) => {
  const [name, setName] = useState(recipe.name);
  const [chefUuid, setChefUuid] = useState(recipe.chef.uuid);

  const chefOptions = chefs.map((c) => c.email);

  return (
    <RecipeIngredientsTable
      recipeIngredients={recipe.ingredients}
      ingredientsOptions={ingredients}
    />
  );
};

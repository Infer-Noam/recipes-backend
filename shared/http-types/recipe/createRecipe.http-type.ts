import { RecipeIngredient } from "../../types/recipeIngredient.type";
import { Recipe } from "../../types/recipe.type"

export type CreateRecipeReq = {
  name: string;
  steps: string[];
  chefUuid: string;
  ingredients: RecipeIngredient[];
};

export type CreateRecipeRes = {
  data: Recipe
};

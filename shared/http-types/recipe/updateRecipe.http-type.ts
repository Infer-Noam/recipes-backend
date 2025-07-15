import { RecipeIngredient } from "../../types/recipeIngredient.type";
import { Recipe } from "../../types/recipe.type";

export type UpdateRecipeReq = {
  uuid: string;
  name: string;
  steps: string[];
  chefUuid: string;
  ingredients: RecipeIngredient[];
};

export type UpdateRecipeRes = {
  recipe: Recipe;
};

import { Recipe, RecipeDetails } from "../../types/recipe.type";

export type UpdateRecipeReq = {
  recipeDetails: RecipeDetails;
  uuid: string;
};

export type UpdateRecipeRes = {
  recipe: Recipe;
};

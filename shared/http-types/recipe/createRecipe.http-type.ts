import { Recipe, RecipeDetails } from "../../types/recipe.type";

export type CreateRecipeReq = {
  recipeDetails: RecipeDetails;
};

export type CreateRecipeRes = {
  recipe: Recipe;
};

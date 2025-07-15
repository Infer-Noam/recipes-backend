import { Recipe } from "../../types/recipe.type";

export type GetRecipeByIdReq = {
  uuid: string;
};

export type GetRecipeByIdRes = {
  recipe: Recipe;
};

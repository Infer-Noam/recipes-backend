import { Recipe } from "../../types/recipe.type";

export type GetAllRecipesReq = {};

export type GetAllRecipesRes = {
  data: Recipe[];
};

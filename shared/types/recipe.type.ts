import { RecipeIngredient } from "./recipeIngredient.type";

export type CreateRecipeReq = {
  uuid: string;
  name: string;
  steps: string[];
  chefUuid: string;
  ingredients: RecipeIngredient[];
  deleteDate: Date;
  createDate: Date;
};

export type CreateRecipeRes = {
  uuid: string;
  name: string;
  steps: string[];
  chefUuid: string;
  ingredients: RecipeIngredient[];
  deleteDate: Date;
  createDate: Date;
};

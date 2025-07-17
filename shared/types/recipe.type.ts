import { RecipeIngredient } from "./recipeIngredient.type";
import { Chef } from "../types/chef.type";

export type Recipe = {
  uuid: string;
  name: string;
  steps: string[];
  chef: Chef;
  ingredients: RecipeIngredient[];
  deleteDate: Date;
  createDate: Date;
};

export type RecipeDetails = {
  name: string;
  steps: string[];
  chefUuid: string;
  ingredients: RecipeIngredient[];
};
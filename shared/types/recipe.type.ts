import { type RecipeIngredient } from "./recipeIngredient.type";
import { type Chef } from "../types/chef.type";

export type Recipe = {
  uuid: string;
  name: string;
  steps: string[];
  chef: Chef;
  ingredients: RecipeIngredient[];
  description: string;
  imageUrl: string;
  deleteDate: Date;
  createDate: Date;
};

export type RecipeDetails = {
  name: string;
  steps: string[];
  chefUuid: string;
  ingredients: RecipeIngredient[];
  description: string;
  imageUrl: string;
};

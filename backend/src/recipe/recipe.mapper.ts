import { Recipe as RecipeEntity } from "../recipe/recipe.entity";
import { Recipe } from "@shared/types/recipe.type";

export const mappedRecipe: (entity: RecipeEntity) => Recipe = (entity) =>
  entity;

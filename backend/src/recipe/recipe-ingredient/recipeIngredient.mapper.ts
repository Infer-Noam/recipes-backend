import { RecipeIngredient as RecipeIngredientEntity } from "../recipe-ingredient/recipeIngredient.entity";
import { RecipeIngredient } from "@shared/types/recipeIngredient.type";

export const mappedRecipeIngredient: (
  entity: RecipeIngredientEntity
) => RecipeIngredient = (entity) => entity;

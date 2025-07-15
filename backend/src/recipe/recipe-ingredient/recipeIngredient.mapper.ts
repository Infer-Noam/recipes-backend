import { RecipeIngredient as RecipeIngredientEntity } from "../recipe-ingredient/recipeIngredient.entity";
import { RecipeIngredient } from "@shared/types/recipeIngredient.type";

export const mappedRecipeIngredient: (
  entity: RecipeIngredientEntity
) => RecipeIngredient = (entity) => {
  const recipeIngredient: RecipeIngredient = {
    ingredient: entity.ingredient,
    measurementUnit: entity.measurementUnit,
    amount: entity.amount,
    deleteDate: entity.deleteDate,
    createDate: entity.createDate,
  };
  return recipeIngredient;
};

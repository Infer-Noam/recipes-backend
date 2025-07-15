import { Ingredient as IngredientEntity } from "../ingredient/ingredient.entity";
import { Ingredient } from "@shared/types/ingredient.type";

export function toIngredient(entity: IngredientEntity): Ingredient {
  const ingredient: Ingredient = {
    uuid: entity.uuid,
    name: entity.name,
    deleteDate: entity.deleteDate,
    createDate: entity.createDate,
  };
  return ingredient;
}

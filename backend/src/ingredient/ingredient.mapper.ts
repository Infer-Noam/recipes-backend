import { Ingredient as IngredientEntity } from "../ingredient/ingredient.entity";
import { Ingredient } from "@shared/types/ingredient.type";

export const mappedIngredient: (entity: IngredientEntity) => Ingredient = (
  entity
) => {
  const ingredient: Ingredient = {
    uuid: entity.uuid,
    name: entity.name,
    deleteDate: entity.deleteDate,
    createDate: entity.createDate,
  };
  return ingredient;
};

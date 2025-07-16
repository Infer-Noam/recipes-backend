import { Ingredient as IngredientEntity } from "../ingredient/ingredient.entity";
import { Ingredient } from "@shared/types/ingredient.type";

export const mappedIngredient: (entity: IngredientEntity) => Ingredient = (
  entity
) => entity;

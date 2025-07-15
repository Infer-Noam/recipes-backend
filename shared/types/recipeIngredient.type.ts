import { MeasurementUnit } from "../enums/measurement-unit.enum";
import { Ingredient } from "../types/ingredient.type";

export type RecipeIngredient = {
  ingredient: Ingredient;
  amount: number;
  measurementUnit: MeasurementUnit;
  createDate: Date,
  deleteDate: Date
};

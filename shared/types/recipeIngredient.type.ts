import { MeasurementUnits } from "../enums/measurement-units.enum";

export type RecipeIngredient = {
  ingredientUuid: string;
  amount: number;
  measurementUnits: MeasurementUnits;
};

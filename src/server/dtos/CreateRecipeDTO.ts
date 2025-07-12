import { MeasurementUnits } from "../../common/enums/measurement-units.enum";
import {
  IsString,
  IsArray,
  ArrayNotEmpty,
  ValidateNested,
  IsInt,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";

class IngredientDTO {
  @IsString()
  ingredient_uuid: string;

  @IsInt()
  amount: number;

  @IsEnum(MeasurementUnits)
  measurement_unit: MeasurementUnits;
}

export class CreateRecipeDTO {
  @IsString()
  name: string;
  @IsArray()
  @ArrayNotEmpty()
  steps: string[];
  @IsString()
  chef_uuid: string;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested()
  @Type(() => IngredientDTO)
  ingredients: IngredientDTO[];
}

import { IsString, IsArray, ArrayNotEmpty } from "class-validator";

export class CreateChefDTO {
  @IsString()
  first_name: string;
  @IsString()
  last_name: string;
  @IsString()
  phone: string
  @IsString()
  email: string
}

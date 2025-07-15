import { Ingredient } from "../ingredient/ingredient.entity";
import { AppDataSource } from "../data-source";
import { mappedIngredient } from "./ingredient.mapper";

const ingredientRepository = AppDataSource.getRepository(Ingredient);

const createIngredient = async (name: string) => {
  const ingredient = await ingredientRepository.save({ name });
  return mappedIngredient(ingredient);
};

export default { createIngredient };

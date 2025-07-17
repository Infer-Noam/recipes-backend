import { Ingredient } from "../ingredient/ingredient.entity";
import { AppDataSource } from "../data-source";

const ingredientRepository = AppDataSource.getRepository(Ingredient);

const createIngredient = async (name: string) => {
  return await ingredientRepository.save({ name });
};

export default { createIngredient };

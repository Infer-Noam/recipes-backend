import { Ingredient } from "../ingredient/ingredient.entity";
import { AppDataSource } from "../data-source";

const ingredientRepository = AppDataSource.getRepository(Ingredient);

const createIngredient = async (name: string) => {
  const ingredient = await ingredientRepository.save({ name });
  return ingredient;
};

export default { createIngredient };

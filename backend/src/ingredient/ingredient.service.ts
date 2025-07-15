import { Ingredient } from "../ingredient/ingredient.entity";
import { AppDataSource } from "../data-source";

const repo = AppDataSource.getRepository(Ingredient);

const createIngredient = async (name: string) => {
  const ingredient = await repo.save({ name });
  return ingredient;
};

export default { createIngredient };

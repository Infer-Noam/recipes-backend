import { Ingredient } from "../ingredient/ingredient.entity";

const createIngredient = async (name: string) => {
  const ingredient = Ingredient.create({ name });

  await ingredient.save();
  return ingredient;
};

export default { createIngredient };

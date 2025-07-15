import { Recipe } from "./recipe.entity";
import { RecipeIngredient as RecipeIngredientEntity } from "../recipe/recipe-ingredient/recipeIngredient.entity";
import { AppDataSource } from "../data-source";
import { RecipeIngredient } from "@shared/types/recipeIngredient.type";
import { mappedRecipe } from "./recipe.mapper";

const recipeRepository = AppDataSource.getRepository(Recipe);

// The lambda saves the recipe first and than uses it's uuid to save the recipe ingredients
const createRecipe = async (
  name: string,
  steps: string[],
  chefUuid: string,
  ingredients: RecipeIngredient[]
) => {
  await AppDataSource.transaction(async (transaction) => {
    // Takes all fields EXCEPT ingredients
    const recipe = await transaction.save(Recipe, {
      name,
      chef: { uuid: chefUuid },
      steps,
    });

    /* Maps the recipe ingredients inside the req body into
      promises of recipe ingredients entity save attempts */
    await Promise.all(
      ingredients.map(async (ri) => {
        await transaction.save(RecipeIngredientEntity, {
          ...ri,
          recipe: { uuid: recipe.uuid },
        });
      })
    );
  });
  const recipe = await recipeRepository.findOne({
    where: { name, chef: { uuid: chefUuid } },
  });
  return recipe;
};

const updateRecipe = async (
  uuid: string,
  name: string,
  steps: string[],
  chefUuid: string,
  ingredients: RecipeIngredient[]
) => {
  return await AppDataSource.transaction(async (t) => {
    // Update the recipe
    await t.update(Recipe, uuid, { name, chef: { uuid: chefUuid }, steps });

    await t.delete(RecipeIngredientEntity, { recipe: { uuid } });

    const newIngredients = ingredients.map((ingredient) => ({
      ...ingredient,
      recipe: { uuid },
    }));

    await t.insert(RecipeIngredientEntity, newIngredients);

    return await t.findOne(Recipe, {
      where: { uuid },
      relations: ["ingredients"],
    });
  });
};

const deleteRecipe = async (uuid: string) => {
  const exist = await recipeRepository.exists({
    where: { uuid: uuid },
  });
  if (!exist) return false;
  await AppDataSource.transaction(async (t) => {
    await t.delete(RecipeIngredientEntity, { recipe: { uuid } });

    await t.delete(Recipe, { uuid });
  });

  return true;
};

const getAllRecipes = async () => {
  const recipes = await recipeRepository.find({ relations: ["ingredients"] });
  return recipes.map((r) => mappedRecipe(r));
};

const getRecipeByUuid = async (uuid: string) => {
  const recipe = await recipeRepository.findOne({
    where: { uuid },
    relations: ["ingredients", "chef"],
  });
  return recipe;
};

export default {
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipeByUuid,
};

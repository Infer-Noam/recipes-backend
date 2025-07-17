import { Recipe } from "./recipe.entity";
import { Chef } from "../chef/chef.entity";
import { RecipeIngredient as RecipeIngredientEntity } from "../recipe/recipe-ingredient/recipeIngredient.entity";
import { AppDataSource } from "../data-source";
import { RecipeIngredient } from "@shared/types/recipeIngredient.type";
import { RecipeDetails } from "@shared/types/recipe.type";

const recipeRepository = AppDataSource.getRepository(Recipe);

// The lambda saves the recipe first and than uses it's uuid to save the recipe ingredients
const createRecipe = async (recipeDetails: RecipeDetails) => {
  const { name, steps, chefUuid, ingredients } = recipeDetails;

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
  return await recipeRepository.findOne({
    where: { name, chef: { uuid: chefUuid } },
  });
};

const updateRecipe = async (uuid: string, recipeDetails: RecipeDetails) => {
  const { name, steps, chefUuid, ingredients } = recipeDetails;

  return await AppDataSource.transaction(async (transaction) => {
    const recipe = await transaction.save(Recipe, {
      uuid,
      name,
      chef: { uuid: chefUuid },
      steps,
      ingredients: ingredients,
    });

    return recipe;
  });
};

const deleteRecipe = async (uuid: string) => {
  const exist = await recipeRepository.exists({
    where: { uuid },
  });
  if (!exist) return false;

  // Cascade dosent support soft delete
  await AppDataSource.transaction(async (transaction) => {
    await transaction.softDelete(RecipeIngredientEntity, { recipe: { uuid } });

    await transaction.softDelete(Recipe, { uuid });
  });

  return true;
};

const getAllRecipes = async () => {
  return await recipeRepository.find({
    relations: {
      ingredients: true,
      chef: true,
    },
  });
};

const getRecipeByUuid = async (uuid: string) => {
  return await recipeRepository.findOne({
    where: { uuid },
    relations: {
      ingredients: true,
      chef: true,
    },
  });
};

export default {
  createRecipe,
  updateRecipe,
  deleteRecipe,
  getAllRecipes,
  getRecipeByUuid,
};

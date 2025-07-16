import { Recipe } from "./recipe.entity";
import { Chef } from "../chef/chef.entity";
import { RecipeIngredient as RecipeIngredientEntity } from "../recipe/recipe-ingredient/recipeIngredient.entity";
import { AppDataSource } from "../data-source";
import { RecipeIngredient } from "@shared/types/recipeIngredient.type";

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
  return await AppDataSource.transaction(async (transaction) => {
    const recipe = await transaction.findOneOrFail(Recipe, {
      where: { uuid },
      relations: { chef: true, ingredients: true },
    });

    recipe.name = name;
    recipe.steps = steps;

    const chef = await transaction.findOneByOrFail(Chef, { uuid: chefUuid });
    recipe.chef = chef;

    recipe.ingredients = await Promise.all(
      ingredients.map(async (i) => {
        const ri = await transaction.findOneByOrFail(RecipeIngredientEntity, {
          uuid: i.uuid,
        });
        ri.recipe = recipe;
        return ri;
      })
    );

    await transaction.save(recipe);

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
  const recipes = await recipeRepository.find({
    relations: {
      ingredients: true,
      chef: true,
    },
  });
  return recipes;
};

const getRecipeByUuid = async (uuid: string) => {
  const recipe = await recipeRepository.findOne({
    where: { uuid },
    relations: {
      ingredients: true,
      chef: true,
    },
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

import { RequestHandler } from "express";
import { Recipe } from "./recipe.entity";
import { RecipeIngredient as RecipeIngredientEntity } from "../recipe/recipe-ingredient/recipeIngredient.entity";
import { AppDataSource } from "../data-source";
import { RecipeIngredient } from "@shared/types/recipeIngredient.type";

// The lambda saves the recipe first and than uses it's uuid to save the recipe ingredients
const createRecipe = async (
  name: string,
  steps: string[],
  chefUuid: string,
  ingredients: RecipeIngredient[]
) => {
  await AppDataSource.transaction(async (t) => {
    const recipeIngredients = [...ingredients];

    // Takes all fields EXCEPT ingredients
    const recipe = t.create(Recipe, {
      name,
      chefUuid,
      steps,
    });
    await t.save(recipe);

    /* Maps the recipe ingredients inside the req body into
      promises of recipe ingredients entity save attempts */
    await Promise.all(
      recipeIngredients.map(async (recipeIngredient) => {
        const ri = t.create(RecipeIngredientEntity, {
          ...recipeIngredient,
          recipeUuid: recipe.uuid,
        });
        await t.save(ri);
      })
    );
  });
  const recipe = await Recipe.findOne({ where: { name: name, chefUuid: chefUuid } });
  return recipe;
};

export default { createRecipe };

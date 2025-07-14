import { RequestHandler } from "express";
import { Recipe } from "../entities/recipe.entity";
import { RecipeIngredient } from "../entities/recipe-ingredient.entity";
import { AppDataSource } from "../data-source";

// The lambda saves the recipe first and than uses it's uuid to save the recipe ingredients
const createRecipe: RequestHandler = async (req, res, _) => {
  try {
    await AppDataSource.transaction(async (t) => {
      const { name, steps, chefUuid, ingredients } = req.body;
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
          const ri = t.create(RecipeIngredient, {
            ...recipeIngredient,
            recipeUuid: recipe.uuid,
          });
          await t.save(ri);
        })
      );
    });
    return res.sendStatus(201);
  } catch (e) {
    return res.sendStatus(500);
  }
};

export default { createRecipe };

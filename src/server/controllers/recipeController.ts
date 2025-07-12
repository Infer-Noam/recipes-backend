import { RequestHandler } from "express";
import { Recipe } from "../../database/entities/Recipe";
import { RecipeIngredient } from "../../database/entities/RecipeIngredient";
import { CreateRecipeDTO } from "../dtos/CreateRecipeDTO";

// The lambda saves the recipe first and than uses it's uuid to save the recipe ingredients
const createRecipe: RequestHandler = async (req, res, _) => {
  const dto = req.body as CreateRecipeDTO;
  const recipe_ingredients = [...dto.ingredients];
  // Takes all fields EXCEPT ingredients
  const recipe = Recipe.create({
    name: dto.name,
    chef_uuid: dto.chef_uuid,
    steps: dto.steps,
  });
  await recipe.save();

  /* Maps the recipe ingredients inside the req body into
  promises of recipe ingredients entity save attempts */
  await Promise.all(
    recipe_ingredients.map(async (recipe_ingredient) => {
      const r = RecipeIngredient.create({
        ...recipe_ingredient,
        recipe_uuid: recipe.uuid,
      });
      await r.save();
    })
  );

  return res.status(201).json(recipe);
};

export default { createRecipe };

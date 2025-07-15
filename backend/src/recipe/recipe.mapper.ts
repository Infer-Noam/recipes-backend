import { Recipe as RecipeEntity } from "../recipe/recipe.entity";
import { Recipe } from "@shared/types/recipe.type";
import { toRecipeIngredient } from "./recipe-ingredient/recipeIngredient.mapper";

export function toRecipe(entity: RecipeEntity): Recipe {
  const recipe: Recipe = {
    uuid: entity.uuid,
    name: entity.name,
    steps: entity.steps,
    chef: entity.chef,
    ingredients: entity.ingredients.map((ri) => toRecipeIngredient(ri)),
    deleteDate: entity.deleteDate,
    createDate: entity.createDate,
  };
  return recipe;
}
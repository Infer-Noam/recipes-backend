import { Recipe as RecipeEntity } from "../recipe/recipe.entity";
import { Recipe } from "@shared/types/recipe.type";
import { mappedRecipeIngredient } from "./recipe-ingredient/recipeIngredient.mapper";

export const mappedRecipe: (entity: RecipeEntity) => Recipe = (entity) => {
  const recipe: Recipe = {
    uuid: entity.uuid,
    name: entity.name,
    steps: entity.steps,
    chef: entity.chef,
    ingredients: entity.ingredients.map((ri) => mappedRecipeIngredient(ri)),
    deleteDate: entity.deleteDate,
    createDate: entity.createDate,
  };
  return recipe;
}
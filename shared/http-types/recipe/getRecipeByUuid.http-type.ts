import { Recipe } from "../../types/recipe.type";
import { UuidReq } from "../generic/uuidReq.https-types";

export type GetRecipeByIdReq = UuidReq;

export type GetRecipeByIdRes = {
  recipe: Recipe;
};

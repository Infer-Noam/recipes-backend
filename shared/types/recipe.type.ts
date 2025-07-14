import { RecipeIngredient } from "./recipeIngredient.type";

export type RecipeCreateReq = {
  uuid: string;
  name: string;
  steps: string[];
  chefUuid: string;
  ingredients: RecipeIngredient[];
  deleteDate: Date;
  createDate: Date;
};

// export type RecipeRes = {
//   uuid: string;
//   name: string;
//   steps: string[];
//   chefUuid: string;
//   ingredients: RecipeIngredient[];
//   deleteDate: Date;
//   createDate: Date;
// };

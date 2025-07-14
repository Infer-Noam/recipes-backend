import recipesRouter from "./recipe/recipes.route";
import chefsRouter from "./chef/chef.route";
import ingredientsRouter from "./ingredient/ingredient.route";
import { Router } from "express";

const router = Router()
  .use("/recipe", recipesRouter)
  .use("/chef", chefsRouter)
  .use("/ingredient", ingredientsRouter);

export default router;

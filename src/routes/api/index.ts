import recipesRouter from "./recipes.route";
import chefsRouter from "./chef.route";
import ingredientsRouter from "./ingredient.route";
import { Router } from "express";

const router = Router()
  .use("/recipe", recipesRouter)
  .use("/chef", chefsRouter)
  .use("/ingredient", ingredientsRouter);

export default router;

import recipesRouter from "./recipes";
import chefsRouter from "./chefs";
import ingredientsRouter from "./ingredients";
import { Router } from "express";

const router = Router()
  .use("/recipes", recipesRouter)
  .use("/chefs", chefsRouter)
  .use("/ingredients", ingredientsRouter);

export default router;

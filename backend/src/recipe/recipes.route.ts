import { Router, Request, Response } from "express";
import service from "./recipe.service";
import { CreateRecipeReq } from "@shared/types/recipe.type";

const router = Router();

router.post(
  "/",
  async (req: Request<{}, {}, CreateRecipeReq>, res: Response) => {
    const { name, steps, chefUuid, ingredients } = req.body;

    const recipe = await service.createRecipe(
      name,
      steps,
      chefUuid,
      ingredients
    );

    res.status(201).json(recipe);
  }
);

// router.put("/",)

export default router;

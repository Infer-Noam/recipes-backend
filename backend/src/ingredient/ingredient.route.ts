import { Router, Request, Response } from "express";
import service from "./ingredient.service";
import { CreateIngredientReq } from "@shared/types/ingredient.type";

const router = Router();

router.post(
  "/",
  async (req: Request<{}, {}, CreateIngredientReq>, res: Response) => {
    const name = req.body.name;
    const ingredient = service.createIngredient(name);

    res.status(201).json(ingredient);
  }
);

export default router;

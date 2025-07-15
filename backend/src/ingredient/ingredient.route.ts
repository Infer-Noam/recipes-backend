import { Router, Request, Response } from "express";
import service from "./ingredient.service";
import {
  CreateIngredientReq,
  CreateIngredientRes,
} from "@shared/http-types/ingredient/createIngredient.http-type";

const router = Router();

router.post(
  "/",
  async (
    req: Request<null, null, CreateIngredientReq>,
    res: Response<CreateIngredientRes>
  ) => {
    const name = req.body.name;
    const ingredient = await service.createIngredient(name);

    res.status(201).json({ data: ingredient });
  }
);

export default router;

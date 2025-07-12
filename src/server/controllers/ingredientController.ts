import { RequestHandler } from "express";
import { Ingredient } from "../../database/entities/Ingredient";
import { CreateIngredientDTO } from "../dtos/CreateIngredientDTO";

const createIngredient: RequestHandler = async (req, res, _) => {
  const dto = req.body as CreateIngredientDTO;

  const ingredient = Ingredient.create({ ...dto });

  await ingredient.save();
  return res.status(201).json(ingredient);
};

export default { createIngredient };

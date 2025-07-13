import { RequestHandler } from "express";
import { Ingredient } from "../../database/entities/Ingredient";

const createIngredient: RequestHandler = async (req, res, _) => {
  const { name } = req.body;

  const ingredient = Ingredient.create({ name });

  await ingredient.save();
  return res.status(201).json(ingredient);
};

export default { createIngredient };

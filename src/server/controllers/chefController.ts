import { RequestHandler } from "express";
import { Chef } from "../../database/entities/Chef";

const createChef: RequestHandler = async (req, res, _) => {
  const { firstName, lastName, phone, email } = req.body;
  const chef = Chef.create({ firstName, lastName, phone, email });

  await chef.save();
  return res.status(201).json(chef);
};

export default { createChef };

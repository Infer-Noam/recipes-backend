import { RequestHandler } from "express";
import { Chef } from "../../database/entities/Chef";
import { CreateChefDTO } from "../dtos/CreateChefDTO";

const createChef: RequestHandler = async (req, res, _) => {
  const dto = req.body as CreateChefDTO;

  const chef = Chef.create({ ...dto });

  await chef.save();
  return res.status(201).json(chef);
};

export default { createChef };

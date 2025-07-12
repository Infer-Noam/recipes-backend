import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { RequestHandler } from "express";

const validateBody = (DTOClass: any): RequestHandler => {
  return async (req, res, next) => {
    if (!req.body)
      return res.status(400).json({ message: "Undefined request body" });
    const dtoObj = plainToInstance(DTOClass, req.body);
    const errors = await validate(dtoObj);
    if (errors.length > 0) {
      return res.status(400).json({ message: "Validation failed", errors });
    }
    next();
  };
};

export default validateBody;

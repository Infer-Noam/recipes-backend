import { Router, Request, Response, NextFunction } from "express";
import service from "./chef.service";
import { ChefCreateReq } from "@shared/types/chef.type";

const router = Router();

router.post(
  "/",
  (req: Request<{}, {}, ChefCreateReq>, res: Response, next: NextFunction) => {
    const { firstName, lastName, phone, email } = req.body;

    const chef = service.createChef(firstName, lastName, phone, email);

    res.status(201).json(chef);

    next();
  }
);

export default router;

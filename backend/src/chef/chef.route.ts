import { Router, Request, Response } from "express";
import service from "./chef.service";
import {
  CreateChefReq,
  CreateChefRes,
} from "@shared/http-types/chef/createChef.http-type";
import {
  UpdateChefReq,
  UpdateChefRes,
} from "@shared/http-types/chef/updateChef.http-type";

const router = Router();

router.post(
  "/",
  async (
    req: Request<null, null, CreateChefReq>,
    res: Response<CreateChefRes>
  ) => {
    const { firstName, lastName, phone, email } = req.body;

    const chef = await service.createChef(firstName, lastName, phone, email);

    res.status(201).json({ chef });
  }
);

router.put(
  "/",
  async (
    req: Request<null, null, UpdateChefReq>,
    res: Response<UpdateChefRes>
  ) => {
    const { uuid, firstName, lastName, phone, email } = req.body;

    const chef = await service.updateChef(
      uuid,
      firstName,
      lastName,
      phone,
      email
    );

    res.status(200).json({ chef });
  }
);

export default router;

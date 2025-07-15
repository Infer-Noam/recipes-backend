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
import { toChef } from "./chef.mapper";

const router = Router();

router.post(
  "/",
  async (
    req: Request<null, null, CreateChefReq>,
    res: Response<CreateChefRes>
  ) => {
    const { firstName, lastName, phone, email } = req.body;

    const chefEntity = await service.createChef(
      firstName,
      lastName,
      phone,
      email
    );

    res.status(201).json({ data: toChef(chefEntity) });
  }
);

router.put(
  "/",
  async (
    req: Request<null, null, UpdateChefReq>,
    res: Response<UpdateChefRes>
  ) => {
    const { uuid, firstName, lastName, phone, email } = req.body;

    await service.updateChef(uuid, firstName, lastName, phone, email);

    res.sendStatus(200);
  }
);

// router.get("/");

export default router;

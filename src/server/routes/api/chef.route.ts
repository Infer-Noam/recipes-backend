import { Router } from "express";
import service from "../../services/chef.service";

const router = Router();

router.route("/").post(service.createChef);

export default router;

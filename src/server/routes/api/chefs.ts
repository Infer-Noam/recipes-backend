import { Router } from "express";
import controller from "../../controllers/chefController";
import validateBody from "../../middleware/validateBody";

const router = Router();

router.route("/").post(controller.createChef);

export default router;

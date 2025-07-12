import { Router } from "express";
import controller from "../../controllers/chefController";
import validateBody from "../../middleware/validateBody";
import { CreateChefDTO } from "../../dtos/CreateChefDTO";

const router = Router();

router.route("/").post(validateBody(CreateChefDTO), controller.createChef);

export default router;

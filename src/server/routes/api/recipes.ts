import { Router } from "express";
import controller from "../../controllers/recipeController";
import validateBody from "../../middleware/validateBody";

const router = Router();

router.route("/").post(controller.createRecipe);

export default router;

import { Router } from "express";
import controller from "../../controllers/recipeController";
import validateBody from "../../middleware/validateBody";
import { CreateRecipeDTO } from "../../dtos/CreateRecipeDTO";

const router = Router();

router.route("/").post(validateBody(CreateRecipeDTO), controller.createRecipe);

export default router;

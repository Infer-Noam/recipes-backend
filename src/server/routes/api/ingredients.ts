import { Router } from "express";
import controller from "../../controllers/ingredientController";
import validateBody from "../../middleware/validateBody";
import { CreateIngredientDTO } from "../../dtos/CreateIngredientDTO";

const router = Router();

router
  .route("/")
  .post(validateBody(CreateIngredientDTO), controller.createIngredient);

export default router;

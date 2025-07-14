import { Router } from "express";
import service from "../../services/recipe.service";

const router = Router();

router.route("/").post(service.createRecipe);

export default router;

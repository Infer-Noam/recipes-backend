import { Router } from "express";
import service from "./recipe.service";

const router = Router();

router.route("/").post(service.createRecipe);

export default router;

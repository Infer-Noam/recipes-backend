import { Router } from "express";
import service from "../../services/ingredient.service";

const router = Router();

router.route("/").post(service.createIngredient);

export default router;

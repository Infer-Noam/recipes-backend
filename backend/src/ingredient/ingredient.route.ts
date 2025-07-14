import { Router } from "express";
import service from "./ingredient.service";

const router = Router();

router.route("/").post(service.createIngredient);

export default router;

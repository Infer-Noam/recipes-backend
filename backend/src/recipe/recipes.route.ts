import { Router, Request, Response } from "express";
import service from "./recipe.service";
import {
  CreateRecipeReq,
  CreateRecipeRes,
} from "@shared/http-types/recipe/createRecipe.http-type";
import {
  DeleteRecipeReq,
  DeleteRecipeRes,
} from "@shared/http-types/recipe/deleteRecipe.http-type";
import {
  UpdateRecipeReq,
  UpdateRecipeRes,
} from "@shared/http-types/recipe/updateRecipe.http-type";
import {
  GetRecipeByIdReq,
  GetRecipeByIdRes,
} from "@shared/http-types/recipe/getRecipeByUuid.http-type";
import {
  GetAllRecipesReq,
  GetAllRecipesRes,
} from "@shared/http-types/recipe/getAllRecipes.http-type";
import { toRecipe } from "./recipe.mapper";

const router = Router();

router.post(
  "/",
  async (
    req: Request<null, null, CreateRecipeReq>,
    res: Response<CreateRecipeRes>
  ) => {
    const { name, steps, chefUuid, ingredients } = req.body;

    const recipe = await service.createRecipe(
      name,
      steps,
      chefUuid,
      ingredients
    );
    if (!recipe) {
      res.sendStatus(500);
    } else {
      res.status(201).json({ data: recipe });
    }
  }
);

router.put(
  "/",
  async (
    req: Request<null, null, UpdateRecipeReq>,
    res: Response<UpdateRecipeRes>
  ) => {
    const { uuid, name, steps, chefUuid, ingredients } = req.body;

    const recipe = await service.updateRecipe(
      uuid,
      name,
      steps,
      chefUuid,
      ingredients
    );

    if (!recipe) {
      res.sendStatus(500);
    } else {
      res.status(201).json({ data: recipe });
    }
  }
);

router.delete(
  "/",
  async (
    req: Request<null, null, DeleteRecipeReq>,
    res: Response<DeleteRecipeRes>
  ) => {
    const { uuid } = req.body;

    const exist = await service.deleteRecipe(uuid);

    res.sendStatus(exist ? 204 : 404);
  }
);

router.get(
  "/",
  async (_: Request<GetAllRecipesReq>, res: Response<GetAllRecipesRes>) => {
    const recipeEntities = await service.getAllRecipes();
    const recipes = recipeEntities.map((re) => toRecipe(re));

    if (recipeEntities.length === 0) {
      return res.sendStatus(404);
    }

    return res.status(200).json({ data: recipes });
  }
);

router.get(
  "/:uuid",
  async (req: Request<GetRecipeByIdReq>, res: Response<GetRecipeByIdRes>) => {
    const uuid = req.params.uuid;

    const recipe = await service.getRecipeByUuid(uuid);

    if (!recipe) return res.sendStatus(404);

    const resJson = {
      data: recipe,
    };

    return res.status(200).json(resJson);
  }
);

export default router;

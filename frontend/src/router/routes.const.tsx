import type { RouteProps } from "react-router-dom";
import HomePage from "../pages/home/homePage.tsx";
import RecipeCreationPage from "../pages/recipe-creation/recipeCreation";
import RecipeEditPage from "../pages/recipe-edit/recipeEdit";
import ChefPage from "../pages/chef/chefPage";

export const PAGES_ROUTES: RouteProps[] = [
  { element: <HomePage></HomePage>, path: "/" },
  { element: <RecipeCreationPage></RecipeCreationPage>, path: "/creation" },
  { element: <RecipeEditPage></RecipeEditPage>, path: "/edit" },
  { element: <ChefPage></ChefPage>, path: "/chef" },
];

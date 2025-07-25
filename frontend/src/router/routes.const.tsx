import type { RouteProps } from "react-router-dom";
import HomePage from "../pages/home/homePage.tsx";
import RecipeCreationPage from "../pages/recipe-creation/recipeCreation";
import RecipeEditPage from "../pages/recipe-edit/recipeEdit";
import ChefPage from "../pages/chef/chefPage";

export const PAGES_ROUTES: RouteProps[] = [
  { element: <HomePage />, path: "/" },
  { element: <RecipeCreationPage />, path: "/creation" },
  { element: <RecipeEditPage />, path: "/edit" },
  { element: <ChefPage />, path: "/chef" },
];

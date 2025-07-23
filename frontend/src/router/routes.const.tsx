import type { RouteProps } from "react-router-dom";
import HomePage from "../pages/home/homePage.tsx";
import RecipeCreationPage from "../pages/recipe-creation/RecipeCreation.tsx";
import RecipePage from "../pages/recipe/recipePage.tsx";
import ChefPage from "../pages/chef/ChefPage.tsx";

export const PAGES_ROUTES: RouteProps[] = [
  { element: <HomePage />, path: "/" },
  { element: <RecipeCreationPage />, path: "/creation" },
  { element: <RecipePage />, path: "/recipe/:uuid" },
  { element: <ChefPage />, path: "/chef" },
];

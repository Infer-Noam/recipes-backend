import { Recipe } from "../../components/recipe/recipe";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { type GetAllRecipesRes } from "../../../../shared/http-types/recipe/getAllRecipes.http-type";
import { type Recipe as RecipeModel } from "../../../../shared/types/recipe.type";
import Styles from "./homePage";

const HomePage = () => {
  const [recipes, setRecipes] = useState<RecipeModel[]>([]);

  useEffect(() => {
    axios
      .get<GetAllRecipesRes>("http://localhost:8080/api/recipe")
      .then(function (response) {
        setRecipes(response.data.recipes);
      });
  });

  return (
    <Grid sx={Styles.grid} container rowSpacing={2.5} columnSpacing={3.5}>
      {[...recipes,].map((recipe) => (
        <Grid key={recipe.uuid}>
          <Recipe recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;

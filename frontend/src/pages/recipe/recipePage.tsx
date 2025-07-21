import { useParams } from "react-router-dom";
import { useGetRecipeByUuid } from "../../hooks/api/useGetRecipeByUuid.api";
import { RecipeCard } from "../../components/recipeCard/RecipeCard";
import { Box, TextField, Autocomplete, Paper } from "@mui/material";
import { useState } from "react";
import Styles from "./recipePage.style";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Recipe } from "../../components/recipe/Recipe";

const RecipePage = () => {
  const { uuid } = useParams();

  if (!uuid) return null;

  const { data: recipe } = useGetRecipeByUuid(uuid);

  if (recipe) {
    return (
      <Box>
        {/* <TextField
          required
          id="outlined-basic"
          label="Recipe name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Autocomplete
          sx={Styles.chefAutocomplete}
          value={chefUuid}
          onChange={(event: any, newValue: string | null) => {
            setChefUuid(newValue);
          }}
          options={chefOptions}
          renderInput={(params) => <TextField {...params} label="Chef" />}
        /> */}

        <Recipe
          recipe={recipe}
          chefs={[]}
          ingredients={[]}
          close={() => {}}
          save={() => {}}
          deleteRecipe={() => {}}
        ></Recipe>
      </Box>
    );
  } else return null;
};

export default RecipePage;

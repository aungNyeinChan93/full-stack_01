import RecipeLists from "@/components/recipes/RecipeLists";
import React from "react";

export type Recipes = Awaited<Promise<typeof fetchAllRecipes>>;
export const fetchAllRecipes = async () => {
  const recipes = await fetch("https://dummyjson.com/recipes").then((res) =>
    res.json()
  );
  return recipes;
};

const RecipesPage = async () => {
  const recipesPromise = fetchAllRecipes();
  return (
    <React.Fragment>
      <main>
        <RecipeLists recipesPromise={recipesPromise} />
      </main>
    </React.Fragment>
  );
};

export default RecipesPage;

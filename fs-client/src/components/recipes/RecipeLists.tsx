"use client";

import React, { Suspense, use } from "react";

interface Props {
  recipesPromise: Promise<any>;
}

const RecipeLists = ({ recipesPromise }: Props) => {
  const recipes = use(recipesPromise);
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={"Loading ... "}>
          <pre>{JSON.stringify(recipes, null, 2)}</pre>
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default RecipeLists;

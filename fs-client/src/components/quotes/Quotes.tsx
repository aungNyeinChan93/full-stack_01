"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import React, { Suspense } from "react";

const Quotes = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["quotes"],
    queryFn: async () => {
      const quotes = await fetch("https://dummyjson.com/quotes", {
        cache: "default",
      }).then((res) => res.json());
      return quotes;
    },
  });
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={"Loading ..."}>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default Quotes;

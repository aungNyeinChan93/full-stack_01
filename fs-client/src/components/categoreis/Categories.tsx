"use client";

import { getAllCategories } from "@/features/categories/categories.action";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Categories = () => {
  const {
    data: categories,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
    // staleTime: 1000 * 60,
    // refetchInterval: 1000,
  });

  if (isLoading) return <>{"Loading . . ."}</>;
  if (error) return <>{error?.message}</>;
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default Categories;

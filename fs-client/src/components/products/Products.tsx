"use client";

import { getProducts } from "@/features/products/products.action";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Products = ({ productId }: { productId?: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["products", productId],
    // enabled: productId ? true : false,
    queryFn: () => getProducts(productId),
  });

  if (isLoading) return <>{"loading ..."}</>;
  if (error) return <>{error?.message}</>;
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default Products;

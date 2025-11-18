import Products from "@/components/products/Products";
import React from "react";

const ProductsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const { productId } = await searchParams;
  return (
    <React.Fragment>
      <main>
        <h3>ProductsPage</h3>
        <section>
          <Products productId={productId} />
        </section>
      </main>
    </React.Fragment>
  );
};

export default ProductsPage;

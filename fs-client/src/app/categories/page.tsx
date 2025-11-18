import Categories from "@/components/categoreis/Categories";
import CategoryCreate from "@/components/categoreis/CategoryCreate";
import React from "react";

const CategoriesPage = async () => {
  return (
    <React.Fragment>
      <main>
        <h3>Categories Page</h3>
        <section>
          <h4>Create Category</h4>
          <CategoryCreate />
        </section>
        <section>
          <Categories />
        </section>
      </main>
    </React.Fragment>
  );
};

export default CategoriesPage;

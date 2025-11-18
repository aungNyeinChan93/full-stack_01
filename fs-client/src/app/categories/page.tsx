import Categories from "@/components/categoreis/Categories";
import React from "react";

const CategoriesPage = async () => {
  return (
    <React.Fragment>
      <main>
        <h3>Categories Page</h3>
        <section>
          <Categories />
        </section>
      </main>
    </React.Fragment>
  );
};

export default CategoriesPage;

import Todos from "@/components/todos/Todos";
import React from "react";

const TodosPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const { id = "" } = await searchParams;

  return (
    <React.Fragment>
      <main>
        <h3>Todo Page {id}</h3>
        <section>
          <Todos id={id} />
        </section>
      </main>
    </React.Fragment>
  );
};

export default TodosPage;

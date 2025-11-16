"use client";

import { fetchTodo } from "@/features/todos/todos.actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  id: string | number;
}

const Todos = ({ id }: Props) => {
  const { data } = useQuery({
    queryKey: ["todos", id],
    queryFn: () => fetchTodo(id),
  });
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default Todos;

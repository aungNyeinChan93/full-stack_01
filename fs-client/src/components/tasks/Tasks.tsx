"use client";

import { getAllTasks } from "@/features/tasks/tasks.actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Tasks = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getAllTasks(),
  });

  if (isLoading) return <>Loading ... </>;
  if (error) return <>{error?.message}</>;

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default Tasks;

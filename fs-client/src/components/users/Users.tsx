"use client";

import { getAllUsers } from "@/features/users/users";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const Users = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["test-users"],
    queryFn: () => getAllUsers(),
  });

  if (isLoading) return <>Loading ...</>;
  if (error) return <>{error?.message}</>;
  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default Users;

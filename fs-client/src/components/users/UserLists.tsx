"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";

const UserLists = () => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const users = await fetch("https://dummyjson.com/users").then((res) =>
        res.json()
      );
      return users;
    },
  });

  if (isLoading) return <>Loading ...</>;
  if (error) return <>{error?.message}</>;

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(users, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default UserLists;

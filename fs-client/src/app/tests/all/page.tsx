"use client";

import { fetchAllPosts } from "@/features/posts/posts.actions";
import { fetchAllUsers } from "@/features/users/users.actions";
import { useQueries } from "@tanstack/react-query";
import React from "react";

const AllPage = () => {
  const [posts, users] = useQueries({
    queries: [
      {
        queryKey: ["posts"],
        queryFn: () => fetchAllPosts(),
      },
      {
        queryKey: ["users"],
        queryFn: () => fetchAllUsers(),
      },
    ],
  });

  return (
    <React.Fragment>
      <main className="w-full min-h-screen p-10">
        <div className="flex justify-between items-start">
          <div className="p-10 w-[50%]">{JSON.stringify(posts, null, 2)}</div>
          <div className="p-10 w-[50%]">{JSON.stringify(users, null, 2)}</div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default AllPage;

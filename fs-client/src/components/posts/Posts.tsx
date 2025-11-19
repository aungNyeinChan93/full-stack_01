"use client";

import { fetchAllPosts } from "@/features/posts/posts.actions";
import { getAllUsers } from "@/features/users/users";
import { fetchAllUsers } from "@/features/users/users.actions";
import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";

const Posts = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () => fetchAllPosts(),
  });

  if (!posts) return <>{"posts not found!"}</>;

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default Posts;

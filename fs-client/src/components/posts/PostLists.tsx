"use client";

import { getAllPosts } from "@/features/posts/posts.actions";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const PostLists = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getAllPosts(),
  });

  if (isLoading) return <>{"loading ..."}</>;
  if (error) return <>{error?.message}</>;

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(posts, null, 2)}</pre>
      </main>
    </React.Fragment>
  );
};

export default PostLists;

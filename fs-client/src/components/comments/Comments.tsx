"use client";

import { fetchAllComments } from "@/features/comments/comments.utils";
import React, { Suspense, use } from "react";

const Comments = ({ id }: { id?: string }) => {
  const comments = use(fetchAllComments(id));
  return (
    <React.Fragment>
      <main>
        <Suspense fallback={"Loading ... "}>
          <pre>{JSON.stringify(comments, null, 2)}</pre>
        </Suspense>
      </main>
    </React.Fragment>
  );
};

export default Comments;

import PostCreate from "@/components/posts/PostCreate";
import PostLists from "@/components/posts/PostLists";
import React from "react";

const PostsPage = async () => {
  return (
    <React.Fragment>
      <main>
        <h3>Posts Page</h3>
        <section>
          <PostCreate />
          <PostLists />
        </section>
      </main>
    </React.Fragment>
  );
};

export default PostsPage;

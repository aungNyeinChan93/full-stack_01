import Posts from "@/components/posts/Posts";
import React from "react";

const PostsPage = async () => {
  return (
    <React.Fragment>
      <main>
        <h3>PostsPage</h3>
        <section>
          <Posts />
        </section>
      </main>
    </React.Fragment>
  );
};

export default PostsPage;

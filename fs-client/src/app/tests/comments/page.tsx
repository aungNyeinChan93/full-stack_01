import Comments from "@/components/comments/Comments";
import React from "react";

interface Props {
  searchParams: Promise<{ [key: string]: string }>;
}

const CommentsPage = async ({ searchParams }: Props) => {
  const { id } = await searchParams;
  return (
    <React.Fragment>
      <main>
        <h3>Comments Page</h3>
        <section>
          <Comments id={id} />
        </section>
      </main>
    </React.Fragment>
  );
};

export default CommentsPage;

import Quotes from "@/components/quotes/Quotes";
import React from "react";

const QuotesPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] }>;
}) => {
  const query = await searchParams;
  const search = query?.search;
  return (
    <React.Fragment>
      <main>
        <h3>Quote Page {search}</h3>
        <section>
          <Quotes />
        </section>
      </main>
    </React.Fragment>
  );
};

export default QuotesPage;

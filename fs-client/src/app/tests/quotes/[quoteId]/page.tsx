import Quote from "@/components/quotes/Quote";
import React from "react";

interface Props {
  params: Promise<{ quoteId: string }>;
}

const QuoteDetail = async ({ params }: Props) => {
  const { quoteId } = await params;
  return (
    <React.Fragment>
      <main>
        <Quote quoteId={quoteId}></Quote>
      </main>
    </React.Fragment>
  );
};

export default QuoteDetail;

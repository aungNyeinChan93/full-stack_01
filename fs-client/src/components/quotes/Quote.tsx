"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Quote = ({ quoteId }: { quoteId: string }) => {
  const [id, setQuoteId] = useState(Number(quoteId));
  const router = useRouter();
  const {
    data: quote,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["quote"],
    queryFn: async () => {
      const quote = await fetch(`https://dummyjson.com/quotes/${id}`, {
        cache: "no-cache",
      }).then((res) => res.json());
      return quote;
    },
    staleTime: 0,
  });

  if (isLoading) return <>{"Loading .. "}</>;

  if (error) return <>{error?.message}</>;

  return (
    <React.Fragment>
      <main>
        <pre>{JSON.stringify(quote, null, 2)}</pre>
        <button
          type="button"
          className="px-4 py-2 bg-red-500 rounded"
          onClick={() => {
            setQuoteId((prev) => prev + 1);
            return router.push(`/tests/quotes/${id}`);
          }}
        >
          Next
        </button>
      </main>
    </React.Fragment>
  );
};

export default Quote;

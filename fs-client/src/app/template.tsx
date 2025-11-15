import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import React, { ReactNode } from "react";

const RootTemplate = async ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <main>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </main>
    </React.Fragment>
  );
};

export default RootTemplate;

"use client";

import { getAllUsers } from "@/features/users/users";
import { useQuery } from "@tanstack/react-query";
import React, { Activity, useState } from "react";

const Users = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["test-users"],
    queryFn: () => getAllUsers(),
  });

  const [show, setShow] = useState(true);

  if (isLoading) return <>Loading ...</>;
  if (error) return <>{error?.message}</>;
  return (
    <React.Fragment>
      <main className="w-full min-h-screen">
        <div className="flex justify-start items-center">
          <>
            <button
              type="button"
              className="px-4 py-2 bg-cyan-500 rounded-2xl mt-4 inline"
              onClick={() => setShow(!show)}
            >
              Toggle
            </button>
            <Activity mode={show ? "visible" : "hidden"}>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </Activity>
          </>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Users;

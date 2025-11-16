"use client";

import { createUser } from "@/features/users/users";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

const UserCreate = () => {
  const queryClient = new QueryClient();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(form);
    setForm({ name: "", email: "" });
    return router.push("/users");
  };

  const { mutate, data, error, isPending } = useMutation({
    mutationFn: (newUser: typeof form) => createUser(newUser),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });

  return (
    <React.Fragment>
      <main className="mx-auto">
        <form onSubmit={formSubmit} className="p-4 border border-red-500">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
          />{" "}
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
          <button
            className={`p-2 border-blue-400 ${isPending && "bg-red-500"}`}
            type="submit"
            disabled={isPending ? true : false}
          >
            {" "}
            Create{" "}
          </button>
        </form>

        {/* for debug */}
        <pre>{JSON.stringify(form, null, 2)}</pre>
        {/* Debug */}
        {error && <p className="text-red-500">Error: {error.message}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </main>
    </React.Fragment>
  );
};

export default UserCreate;

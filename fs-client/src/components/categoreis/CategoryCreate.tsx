"use client";

import {
  createNewCategory,
  revalidateCategories,
} from "@/features/categories/categories.action";
import {
  CategorySchema,
  CategorySchemaType,
} from "@/lib/zod-schema/categories.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const CategoryCreate = () => {
  const queryClient = new QueryClient();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { isLoading, errors },
  } = useForm<CategorySchemaType>({
    defaultValues: {
      name: "",
    },
    resolver: zodResolver(CategorySchema),
  });

  const {
    mutate,
    data: newData,
    error,
    reset,
  } = useMutation({
    mutationFn: (newCategory: CategorySchemaType) =>
      createNewCategory(newCategory),
    onSuccess(data) {
      alert(JSON.stringify(data, null, 2));
      queryClient.setQueriesData({ queryKey: ["categories"] }, data);
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  const createCategory: SubmitHandler<CategorySchemaType> = async (
    newCategory: CategorySchemaType
  ) => {
    mutate(newCategory);
    if (newData && !error) {
      revalidateCategories();
      return router.push("/categories");
    }
  };

  if (error) return <>{error?.message}</>;

  return (
    <React.Fragment>
      <main className="border border-red-500 p-4 my-3 lg:w-[700px] mx-auto rounded-2xl">
        <form onSubmit={handleSubmit(createCategory)}>
          <label htmlFor="name">Category Name</label>
          <input
            className="p-3 border border-yellow-600 rounded mx-2"
            {...register("name")}
            type="text"
            name="name"
            id="name"
          />
          {errors.name && (
            <p className="text-red-600 p-1 my-1 text-base">
              {errors?.name.message}
            </p>
          )}
          <button type="submit">Submit</button>
        </form>
      </main>

      {/* debug */}
      {JSON.stringify(newData, null, 2)}
    </React.Fragment>
  );
};

export default CategoryCreate;

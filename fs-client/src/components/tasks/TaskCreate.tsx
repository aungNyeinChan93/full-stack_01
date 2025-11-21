"use client";

import { Task, TaskSchema } from "@/lib/zod-schema/tasks-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const TaskCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitted },
    reset,
    control,
  } = useForm<Task>({
    defaultValues: {
      name: "",
      isCompleted: false,
      user_id: null,
    },
    resolver: zodResolver(TaskSchema),
  });

  async function taskCreateSubmit(task: Task) {
    alert(JSON.stringify(task, null, 2));
    console.log({ isSubmitted });
  }

  if (isLoading) return <>Loading</>;
  return (
    <React.Fragment>
      <main className="w-full min-h-screen flex justify-center items-center">
        <form
          onSubmit={handleSubmit(taskCreateSubmit)}
          className="w-[500px] border border-red-500 rounded p-4"
        >
          <div>
            <label htmlFor="name">Name</label>
            <input {...register("name")} type="text" />
            {errors && (
              <p className="text-red-600 p-2"> {errors?.name?.message} </p>
            )}
          </div>
          <button disabled={isLoading ? true : false} type="submit">
            Submit
          </button>
        </form>
      </main>
    </React.Fragment>
  );
};

export default TaskCreate;

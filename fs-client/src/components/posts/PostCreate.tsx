"use client";

import { createPost } from "@/features/posts/posts.actions";
import { PostSchema, PostSchemType } from "@/lib/zod-schema/posts.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const PostCreate = () => {
  const router = useRouter();
  const queryClient = new QueryClient();
  const {
    mutate,
    data: newPost,
    error,
  } = useMutation({
    mutationKey: ["post.create"],
    mutationFn: (newPost: any) => createPost(newPost),
    onSuccess: (data) => {
      alert(`${data?.title} has been created`);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading, isSubmitting },
    reset,
  } = useForm<PostSchemType>({
    defaultValues: {
      body: "",
      title: "",
    },
    resolver: zodResolver(PostSchema),
  });

  const postCreateSubmit: SubmitHandler<PostSchemType> = (
    post: PostSchemType
  ) => {
    alert(JSON.stringify(post, null, 2));
    const newPost = {
      ...post,
      author_id: "f4f6782f-93df-4565-bb33-55594f767b77",
    };
    mutate(newPost);
    if (!isSubmitting) {
      reset();
      return router.push("/posts");
    }
  };

  if (error) return <>{error?.message}</>;
  return (
    <React.Fragment>
      <pre>{JSON.stringify(newPost)}</pre>
      <main className=" p-4 border border-red-400 w-[500px] mx-auto rounded-2xl">
        <form onSubmit={handleSubmit(postCreateSubmit)}>
          <div className="p-2 my-2 ">
            <label htmlFor="title">Title</label>
            <input {...register("title")} type="text" name="title" id="title" />
            {errors && (
              <p className="p-2 text-red-600">{errors?.title?.message}</p>
            )}
          </div>
          <div className="p-2 my-2 ">
            <label htmlFor="body">Body</label>
            <input {...register("body")} type="text" name="body" id="body" />
            {errors && (
              <p className="p-2 text-red-600">{errors?.body?.message}</p>
            )}
          </div>
          <div className="mt3">
            <button type="submit"> Submit</button>
          </div>
        </form>
      </main>
    </React.Fragment>
  );
};

export default PostCreate;

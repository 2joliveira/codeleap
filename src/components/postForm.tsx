"use client";

import { useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader } from "lucide-react";
import { usePosts } from "@/hooks/usePosts";
import { PostSchema, postSchema } from "@/models/post";
import { Button, InputText, InputTextarea, Text } from "./ui";

export function PostForm() {
  const { createPost } = usePosts();
  const {
    control,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  const [isCreatingPost, setIsCreatingPost] = useTransition();

  function onHandleSubmit(data: PostSchema) {
    setIsCreatingPost(async () =>
      createPost({ ...data, created_datetime: new Date() }),
    );
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onHandleSubmit)}
      className="p-6 w-full h-83.5 flex flex-col gap-4 border border-gray-100 rounded-2xl"
    >
      <Text variant="heading">What’s on your mind?</Text>

      <div>
        <Text variant="label-small">Title</Text>

        <Controller
          control={control}
          name="title"
          render={({ field: { value, onChange } }) => (
            <InputText
              value={value}
              onChange={onChange}
              placeholder="Hello world"
              className="mt-2"
            />
          )}
        />
      </div>

      <div>
        <Text variant="label-small">Content</Text>

        <Controller
          control={control}
          name="content"
          render={({ field: { value, onChange } }) => (
            <InputTextarea
              value={value}
              onChange={onChange}
              placeholder="Content here"
              className="mt-2"
            />
          )}
        />
      </div>

      <div className="w-full flex justify-end">
        <Button type="submit" disabled={!isValid}>
          {!isCreatingPost ? (
            "Create"
          ) : (
            <Loader size={20} className="text-white animate-spin" />
          )}
        </Button>
      </div>
    </form>
  );
}

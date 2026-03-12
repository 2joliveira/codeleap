"use client";

import { Controller, useForm } from "react-hook-form";
import { Button, InputText, InputTextarea, Text } from "./ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostSchema, postSchema } from "@/models/post";

export function PostForm() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      created_datetime: new Date(),
      title: "",
      content: "",
    },
  });

  function onHandleSubmit(data: PostSchema) {
    console.log(data);
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
          ENTER
        </Button>
      </div>
    </form>
  );
}

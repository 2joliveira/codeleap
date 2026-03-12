"use client";

import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, InputText, Text } from "@/components";

const signinSchema = z.object({
  username: z.string().min(1, { error: "Nome do usuário é obrigatório !" }),
});

type SignIn = z.infer<typeof signinSchema>;

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      username: "",
    },
  });

  function onHandleSubmit(data: SignIn) {
    console.log(data);
  }

  return (
    <main className="p-6 mx-4 bg-white w-125 min-h-51.25 rounded-2xl border border-gray-100 flex flex-col gap-4">
      <Text as="h1" variant="heading">
        Welcome to CodeLeap network!
      </Text>

      <div>
        <Text as="label" variant="label-small">
          Please enter your username
        </Text>
        <Controller
          control={control}
          name="username"
          render={({ field: { value, onChange } }) => (
            <InputText
              value={value}
              onChange={onChange}
              placeholder="John Doe"
              className="mt-2"
            />
          )}
        />
      </div>

      <div className="w-full flex justify-end">
        <Button
          type="submit"
          onClick={handleSubmit(onHandleSubmit)}
          disabled={!isValid}
        >
          ENTER
        </Button>
      </div>
    </main>
  );
}

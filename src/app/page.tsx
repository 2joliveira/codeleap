import { Button, InputText, Text } from "@/components";

export default function Home() {
  return (
    <main className="p-6 bg-white w-125 h-51.25 rounded-2xl border border-gray-100 flex flex-col gap-4">
      <Text as="h1" variant="heading">
        Welcome to CodeLeap network!
      </Text>

      <div>
        <Text as="label" variant="label-small">
          Please enter your username
        </Text>
        <InputText placeholder="John Doe" />
      </div>

      <div className="w-full flex justify-end">
        <Button disabled>ENTER</Button>
      </div>
    </main>
  );
}

import { Button, InputText, PostCard, Text } from "@/components";

export default function Home() {
  return (
    <main className="h-screen w-200 bg-white">
      <header className="h-20 px-8 bg-blue flex items-center">
        <Text as="h1" variant="heading" className="text-white">
          CodeLeap Network
        </Text>
      </header>

      <div className="p-6 w-full flex flex-col gap-6">
        <form className="p-6 w-full h-83.5 flex flex-col gap-4 border border-gray-100 rounded-2xl">
          <Text variant="heading">What’s on your mind?</Text>

          <div>
            <Text variant="label-small">Title</Text>
            <InputText placeholder="Hello world" className="mt-2" />
          </div>

          <div>
            <Text variant="label-small">Content</Text>
            <InputText placeholder="Content here" className="mt-2 h-18.5" />
          </div>

          <div className="w-full flex justify-end">
            <Button disabled>ENTER</Button>
          </div>
        </form>

        <PostCard />
      </div>
    </main>
  );
}

import { PostForm, PostList, Text } from "@/components";

export default function Home() {
  return (
    <main className="w-200 h-full bg-white overflow-y-auto">
      <header className="h-20 px-8 bg-blue flex items-center">
        <Text as="h1" variant="heading" className="text-white">
          CodeLeap Network
        </Text>
      </header>

      <div className="p-6 w-full flex flex-col gap-6">
        <PostForm />

        <PostList />
      </div>
    </main>
  );
}

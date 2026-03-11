import { Button, Text } from "@/components";

export default function Home() {
  return (
    <main>
      <Text as="h1" variant="heading">Welcome to CodeLeap network!</Text>

      <Text as="label">Please enter your username</Text>
      <Button>ENTER</Button>
    </main>
  );
}

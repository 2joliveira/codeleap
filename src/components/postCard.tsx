import { Trash2, SquarePen } from "lucide-react";
import { ButtonIcon } from "./buttonIcon";
import { Text } from "./text";

export function PostCard() {
  return (
    <main className="w-full border border-gray-100 rounded-2xl">
      <header className="px-6 h-17.5 bg-blue flex items-center justify-between rounded-t-[15px]">
        <Text variant="heading" className="text-white">
          My First Post at CodeLeap Network!
        </Text>

        <div className="flex items-center justify-center gap-4">
          <ButtonIcon icon={Trash2} />
          <ButtonIcon icon={SquarePen} />
        </div>
      </header>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Text variant="label-large" className="text-gray-300">
            @Jorge
          </Text>
          <Text variant="label-small" className="text-gray-300">
            25 min ago
          </Text>
        </div>

        <Text variant="paragraph">
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit.
          <br />
          Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </Text>
      </div>
    </main>
  );
}

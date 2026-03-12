import { Trash2, SquarePen } from "lucide-react";
import { ButtonIcon } from "./ui/buttonIcon";
import { Text } from "./ui/text";
import { Post } from "@/models/post";
import { getDistanceToNow } from "@/utils/getDistanceToNow ";

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <li className="w-full border border-gray-100 rounded-2xl">
      <header className="px-6 h-17.5 bg-blue flex items-center justify-between rounded-t-[15px]">
        <Text variant="heading" className="text-white">
          {post.title}
        </Text>

        {post.username === sessionStorage.getItem("currentUser") && (
          <div className="flex items-center justify-center gap-4">
            <ButtonIcon icon={Trash2} />
            <ButtonIcon icon={SquarePen} />
          </div>
        )}
      </header>

      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Text variant="label-large" className="text-gray-300">
            {`@${post.username}`}
          </Text>
          <Text variant="label-small" className="text-gray-300">
            {getDistanceToNow(post.created_datetime!)}
          </Text>
        </div>

        <Text variant="paragraph">{post.content}</Text>
      </div>
    </li>
  );
}

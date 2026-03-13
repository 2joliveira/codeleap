"use client";

import { useState } from "react";
import { Close } from "@radix-ui/react-dialog";
import { Trash2, SquarePen } from "lucide-react";
import { Post } from "@/models/post";
import { usePosts } from "@/hooks/usePosts";
import { getDistanceToNow } from "@/utils/getDistanceToNow ";
import { Button, ButtonIcon, Modal, Text } from "./ui";
import { PostForm } from "./postForm";

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  const [editModalOpen, setEditModalOpen] = useState(false);
  const currentUser = sessionStorage.getItem("currentUser");
  const { deletePost } = usePosts();

  function handleRemovePost() {
    deletePost(post.id);
  }

  return (
    <li className="w-full border border-gray-100 rounded-2xl">
      <header className="px-6 h-full min-h-17.5 sm:h-17.5 bg-blue flex items-center justify-between gap-4 rounded-t-[15px]">
        <Text variant="heading" className="text-white">
          {post.title}
        </Text>

        {post.username === currentUser && (
          <div className="flex items-center justify-center gap-4">
            <Modal
              trigger={<ButtonIcon icon={Trash2} />}
              title="Are you sure you want to delete this item?"
            >
              <div className="w-full mt-10 flex items-center justify-end gap-4">
                <Close asChild>
                  <Button variant="ghost">Cancel</Button>
                </Close>

                <Close asChild>
                  <Button variant="destructive" onClick={handleRemovePost}>
                    Delete
                  </Button>
                </Close>
              </div>
            </Modal>

            <Modal
              trigger={
                <ButtonIcon
                  onClick={() => setEditModalOpen(true)}
                  icon={SquarePen}
                />
              }
              title="Edit item"
              open={editModalOpen}
            >
              <PostForm post={post} onSuccess={() => setEditModalOpen(false)} />
            </Modal>
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

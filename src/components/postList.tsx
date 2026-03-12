"use client";

import Image from "next/image";
import { Loader } from "lucide-react";
import { usePosts } from "@/hooks/usePosts";
import { PostItem } from "./postItem";
import { Text } from "./ui/text";
import emptyState from "@/assets/empty-state.png";

export function PostList() {
  const { posts, isLoadingPosts } = usePosts();

  if (!isLoadingPosts && posts.results?.length < 1) {
    return (
      <div className="w-full mt-10 flex flex-col items-center justify-center ">
        <Image src={emptyState} alt="Empty List" className="w-50" />

        <Text variant="label-large" className="text-gray-200">Nenhum post encontrado !</Text>
      </div>
    );
  }

  return isLoadingPosts ? (
    <div className="w-full mt-20 flex items-center justify-center">
      <Loader size={30} className="text-blue animate-spin" />
    </div>
  ) : (
    <ul className="flex flex-col gap-6">
      <PostItem />
    </ul>
  );
}

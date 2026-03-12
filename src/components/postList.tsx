"use client";

import { usePosts } from "@/hooks/usePosts";
import { PostItem } from "./postItem";

export function PostList() {
  const { posts, isLoadingPosts } = usePosts();

  if (!isLoadingPosts && posts.results?.length < 1) {
    return <div>Lista vazia !</div>;
  }

  return isLoadingPosts ? (
    <div>Carregando...</div>
  ) : (
    <ul className="flex flex-col gap-6">
      <PostItem />
    </ul>
  );
}

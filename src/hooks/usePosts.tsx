import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/services/api";
import { Post } from "@/models/post";

interface ResponseProps {
  count: number;
  next: Post | null;
  previous: Post | null;
  results: Post[];
}

export function usePosts() {
  const { data, isLoading } = useQuery<ResponseProps>({
    queryKey: ["posts"],
    queryFn: () => fetcher<ResponseProps>(),
  });

  return {
    posts: data || {} as ResponseProps,
    isLoadingPosts: isLoading,
  };
}

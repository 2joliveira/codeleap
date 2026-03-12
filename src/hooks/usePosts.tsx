import { useQuery, useQueryClient } from "@tanstack/react-query";
import { api, fetcher } from "@/services/api";
import { Post, PostSchema } from "@/models/post";

interface ResponseProps {
  count: number;
  next: Post | null;
  previous: Post | null;
  results: Post[];
}

export function usePosts() {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery<ResponseProps>({
    queryKey: ["posts"],
    queryFn: () => fetcher<ResponseProps>(),
  });

  async function createPost(payload: PostSchema) {
    try {
      await api.post<Post>("", { ...payload, username: sessionStorage.getItem("currentUser") });

      queryClient.invalidateQueries({ queryKey: ["posts"] });
    } catch (error) {
      console.error(error);
    }
  }

  return {
    posts: data || ({} as ResponseProps),
    isLoadingPosts: isLoading,
    createPost,
  };
}

import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
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

  const createPostMutation = useMutation({
    mutationFn: async (payload: PostSchema) => {
      return api.post("", {
        ...payload,
        username: sessionStorage.getItem("currentUser"),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: async (id: number) => {
      return api.delete(`/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const editPostMutation = useMutation({
    mutationFn: async ({
      id,
      payload,
    }: {
      id: number;
      payload: PostSchema;
    }) => {
      return api.patch(`/${id}`, payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return {
    posts: data || ({} as ResponseProps),
    isLoadingPosts: isLoading,

    createPost: createPostMutation.mutateAsync,
    deletePost: deletePostMutation.mutateAsync,
    editPost: editPostMutation.mutateAsync,

    isCreatingPost: createPostMutation.isPending,
    isDeletingPost: deletePostMutation.isPending,
    isEditingPost: editPostMutation.isPending,
  };
}
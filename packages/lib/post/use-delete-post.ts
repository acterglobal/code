import { OperationResult, UseMutationState } from 'urql'

import DELETE_POST from '@acter/lib/graphql/mutations/delete-post.graphql'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { Post as PostType } from '@acter/schema'

export type PostVariables = {
  postId: string
}

type DeletePostData = {
  deletePost: PostType
}

interface DeletePostOptions
  extends UseMutationOptions<DeletePostData, PostVariables> {
  onCompleted: (DeletePostData) => PostType[] | void
}

export type HandleMethod<TData> = (
  post: PostType | TData
) => Promise<OperationResult<DeletePostData, PostVariables>>

/**
 * Custom hook that deletes a post
 * @param displayPostList
 * @returns handle method to delete post
 * @returns mutation results
 */

export const useDeletePost = (
  options?: DeletePostOptions
): [
  UseMutationState<DeletePostData, PostVariables>,
  HandleMethod<DeletePostData>
] => {
  const [mutationResult, deletePost] = useNotificationMutation<
    DeletePostData,
    PostVariables
  >(DELETE_POST, {
    ...options,
  })

  const handleDeletePost = async (values: PostType) =>
    deletePost({
      postId: values.id,
    })

  return [mutationResult, handleDeletePost]
}

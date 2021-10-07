import { MutationResult, StoreObject } from '@apollo/client'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { Post as PostType } from '@acter/schema'
import DELETE_POST from '@acter/schema/mutations/delete-post.graphql'

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

export type HandleMethod<TData> = (post: PostType | TData) => Promise<void>

/**
 * Custom hook that deletes a post
 * @param displayPostList
 * @returns handle method to delete post
 * @returns mutation results from apollo
 */

export const useDeletePost = (
  options?: DeletePostOptions
): [HandleMethod<DeletePostData>, MutationResult] => {
  const [deletePost, mutationResult] = useNotificationMutation<
    DeletePostData,
    PostVariables
  >(DELETE_POST, {
    ...options,
    update: (cache, result, updateOptions) => {
      options?.update?.(cache, result, updateOptions)

      const {
        data: { deletePost: deletedPost },
      } = result

      cache.modify({
        id: cache.identify((deletedPost as unknown) as StoreObject),
        fields: (_, { DELETE }) => DELETE,
      })
    },
    getSuccessMessage: (data) =>
      data.deletePost.parentId ? 'Comment deleted' : 'Post deleted',
  })

  const handleDeletePost = async (values: PostType) => {
    deletePost({
      variables: {
        postId: values.id,
      },
    })
  }

  return [handleDeletePost, mutationResult]
}

import { MutationResult } from '@apollo/client'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { Post as PostType } from '@acter/schema'
import UPDATE_POST from '@acter/schema/mutations/post-update.graphql'

export type PostVariables = PostType & {
  postId: string
}

type UpdatePostData = {
  updatePost: PostType
}
interface UpdatePostOptions
  extends UseMutationOptions<UpdatePostData, PostVariables> {
  onCompleted: (UpdatePostData) => PostType[] | void
}

export type HandleMethod<TData> = (post: PostType | TData) => Promise<void>

/**
 * Custom hook that updates a post
 * @param displayPostList
 * @returns handle method to update post
 * @returns mutation results from apollo
 */
export const useUpdatePost = (
  options?: UpdatePostOptions
): [HandleMethod<UpdatePostData>, MutationResult] => {
  const [updatePost, mutationResult] = useNotificationMutation<
    UpdatePostData,
    PostVariables
  >(UPDATE_POST, {
    ...options,
    getSuccessMessage: () => 'Post updated',
  })

  const handlePost = async (values: PostVariables) => {
    updatePost({
      variables: {
        ...values,
        postId: values.id,
      },
    })
  }

  return [handlePost, mutationResult]
}

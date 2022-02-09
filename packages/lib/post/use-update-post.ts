import { OperationResult, UseMutationState } from 'urql'

import UPDATE_POST from '@acter/lib/graphql/mutations/post-update.graphql'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { Post as PostType } from '@acter/schema'

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

export type HandleMethod<TData> = (
  post: PostType | TData
) => Promise<OperationResult<UpdatePostData, PostVariables>>

/**
 * Custom hook that updates a post
 * @param displayPostList
 * @returns handle method to update post
 * @returns mutation results
 */
export const useUpdatePost = (
  options?: UpdatePostOptions
): [
  UseMutationState<UpdatePostData, PostVariables>,
  HandleMethod<UpdatePostData>
] => {
  const [mutationResult, updatePost] = useNotificationMutation<
    UpdatePostData,
    PostVariables
  >(UPDATE_POST, {
    ...options,
    getSuccessMessage: () => 'Post updated',
  })

  const handlePost = async (values: PostVariables) => {
    return updatePost({
      ...values,
      postId: values.id,
    })
  }

  return [mutationResult, handlePost]
}

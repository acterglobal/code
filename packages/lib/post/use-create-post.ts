import { UseMutationState } from 'urql'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { useUser } from '@acter/lib/user/use-user'
import { Post as PostType, Acter } from '@acter/schema'
import CREATE_POST from '@acter/schema/mutations/post-create.graphql'

export type PostVariables = PostType & {
  acterId: string
  authorId: string
}

type CreatePostData = { createPost: PostType }
type CreatePostOptions = UseMutationOptions<CreatePostData, PostVariables>

export type HandleMethod<TData> = (post: PostType | TData) => Promise<void>

/**
 * Custom hook that creates new post
 * @params acter user displayPostList
 * @returns handle method to create post
 * @returns mutation results from apollo
 */
export const useCreatePost = (
  acter: Acter,
  options?: CreatePostOptions
): [
  HandleMethod<CreatePostData>,
  UseMutationState<CreatePostData, PostVariables>
] => {
  const { user } = useUser()

  const [mutationResult, createPost] = useNotificationMutation<
    CreatePostData,
    PostVariables
  >(CREATE_POST, {
    ...options,
    getSuccessMessage: () => 'Post created',
  })

  const handlePost = async (values: PostVariables) => {
    if (!user) throw 'User is not set.'
    createPost({
      ...values,
      acterId: acter.id,
      authorId: user.Acter.id,
    })
  }

  return [handlePost, mutationResult]
}

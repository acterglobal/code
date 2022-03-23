import { UseMutationState, OperationResult } from 'urql'

import { useTranslation } from '@acter/lib/i18n/use-translation'
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

export type HandleMethod<TData> = (
  post: PostType | TData
) => Promise<OperationResult<CreatePostData, PostVariables>>

/**
 * Custom hook that creates new post
 * @params acter user displayPostList
 * @returns handle method to create post
 * @returns mutation results
 */
export const useCreatePost = (
  acter: Acter,
  options?: CreatePostOptions
): [
  HandleMethod<CreatePostData>,
  UseMutationState<CreatePostData, PostVariables>
] => {
  const { t } = useTranslation('success-messages')
  const { user } = useUser()

  const [mutationResult, createPost] = useNotificationMutation<
    CreatePostData,
    PostVariables
  >(CREATE_POST, {
    ...options,
    getSuccessMessage: () => t('post.created'),
  })

  const handlePost = async (values: PostVariables) => {
    if (!user) throw 'User is not set.'
    return createPost({
      ...values,
      acterId: acter.id,
      authorId: user.Acter.id,
    })
  }

  return [handlePost, mutationResult]
}

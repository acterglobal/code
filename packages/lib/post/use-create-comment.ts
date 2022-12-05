import { UseMutationState } from 'urql'

import { useTranslation } from '@acter/lib/i18n/use-translation'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { useUser } from '@acter/lib/user/use-user'
import { Post as PostType, Acter } from '@acter/schema'
import CREATE_COMMENT from '@acter/schema/mutations/comment-create.graphql'
import CREATE_POST_MENTION from '@acter/schema/mutations/post-mention-create.graphql'

export type PostVariables = PostType & {
  acterId: string
  authorId: string
  parentId: string
}

type CreatePostData = { createOnePost: PostType }
type CreatePostOptions = UseMutationOptions<CreatePostData, PostVariables>

export type HandleMethod<TData> = (post: PostType | TData) => Promise<void>

/**
 * Custom hook that creates new post
 * @params acter user displayPostList
 * @returns handle method to create post
 * @returns mutation results
 */
export const useCreateComment = (
  acter: Acter,
  options?: CreatePostOptions
): [
  HandleMethod<CreatePostData>,
  UseMutationState<CreatePostData, PostVariables>
] => {
  const { t } = useTranslation('success-messages')
  const { user } = useUser()

  const [mutationResult, createOnePost] = useNotificationMutation<
    CreatePostData,
    PostVariables
  >(CREATE_COMMENT, {
    ...options,
    getSuccessMessage: () => t('comment.created'),
  })

  const [_, createOnePostMention] = useNotificationMutation<
    CreatePostMentionData,
    PostMentionVariables
  >(CREATE_POST_MENTION, {
    getSuccessMessage: () => 'Mentions Created',
  })

  const handlePost = async (values: PostVariables, mentions: PostMention[]) => {
    if (!user) throw 'User is not set.'
    const { data } = await createOnePost({
      ...values,
      acterId: acter.id,
      authorId: user.Acter.id,
    })

    if (data?.createOnePost && mentions) {
      mentions.map((mention) => {
        createOnePostMention({
          name: mention.name,
          postId: data.createOnePost.id,
          acterId: mention.acterId,
          createdByUserId: user.id,
          ...mention,
        })
      })
    }
  }

  return [handlePost, mutationResult]
}

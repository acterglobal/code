import { OperationResult, UseMutationState } from 'urql'

import { useTranslation } from '@acter/lib/i18n/use-translation'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import CREATE_POST_REACTION from '@acter/schema/mutations/post-reaction-create.graphql'

export type CreatePostReactionVariables = {
  emoji: string
  emojiUnicode: string
  acterId: string
  postId: string
  createdByUserId: string
}
type CreatePostReactionData = {
  id: string
  emoji: string
  postId: string
  acterId: string
}

type CreatePostReactionOptions = UseMutationOptions<
  CreatePostReactionData,
  CreatePostReactionVariables
>
export type HandleMethodReturnType = Promise<
  OperationResult<CreatePostReactionData, CreatePostReactionVariables>
>
export type HandleMethod = (
  values: CreatePostReactionVariables
) => HandleMethodReturnType

/**
 * Custom hook that create post reaction
 * @param options - mutation options e.g. data or variables
 * @returns handleMethod to create post reaction and the mutation results
 */
export const useCreatePostReaction = (
  options?: CreatePostReactionOptions
): [
  UseMutationState<CreatePostReactionData, CreatePostReactionVariables>,
  HandleMethod
] => {
  const { t } = useTranslation('success-messages')

  const [mutationResult, createOnePostReaction] = useNotificationMutation(
    CREATE_POST_REACTION,
    {
      ...options,
      getSuccessMessage: () => t('reaction.added'),
    }
  )

  const handleCreatePostReaction = (values) => createOnePostReaction({ ...values })

  return [mutationResult, handleCreatePostReaction]
}

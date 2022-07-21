import { OperationResult, UseMutationState } from 'urql'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { PostMention } from '@acter/schema'
import CREATE_POST_MENTION from '@acter/schema/mutations/post-mention-create.graphql'

export type PostMentionVariables = {
  name: string
  postid: string
  acterId: string
  createdByUserId: string
}

type CreatePostMentionData = { createMention: PostMention }

type CreatePostMentionOptions = UseMutationOptions<
  CreatePostMentionData,
  PostMentionVariables
>

export type HandleMethod<TData> = (
  mentions: PostMentionVariables
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<OperationResult<TData, Record<string, any>>>

type CreatePostMentionUseMutationState = UseMutationState<
  CreatePostMentionData,
  PostMentionVariables
>

/**
 * Custom hook that create post mentions
 * @param options - mutation options e.g. data or variables
 * @returns handleMethod to create post mention and the mutation results
 */
export const useCreatePostMention = (
  options?: CreatePostMentionOptions
): [HandleMethod<CreatePostMentionData>, CreatePostMentionUseMutationState] => {
  const [mutationResult, createPostMention] = useNotificationMutation(
    CREATE_POST_MENTION,
    {
      ...options,
      getSuccessMessage: () => 'Mentions Created',
    }
  )

  const handleCreatePostMention = (values) => createPostMention({ ...values })

  return [handleCreatePostMention, mutationResult]
}

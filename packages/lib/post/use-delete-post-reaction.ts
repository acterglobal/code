import { OperationResult, UseMutationState } from 'urql'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import DELETE_POST_REACTION from '@acter/schema/mutations/delete-post-reaction.graphql'

export type DeletePostReactionVariables = {
  id: string
}

type DeletePostReactionData = {
  id: string
  postId: string
}
type DeletePostReactionOptions = UseMutationOptions<
  DeletePostReactionData,
  DeletePostReactionVariables
>

export type HandleMethodReturnType = Promise<
  OperationResult<DeletePostReactionData, DeletePostReactionVariables>
>
export type HandleMethod = (
  values: DeletePostReactionVariables
) => HandleMethodReturnType

/**
 * Custom hook that delete post reaction
 * @param options - mutation options e.g. data or variables
 * @returns handleMethod to delete post reaction and the mutation results
 */
export const useDeletePostReaction = (
  options?: DeletePostReactionOptions
): [
  UseMutationState<DeletePostReactionData, DeletePostReactionVariables>,
  HandleMethod
] => {
  const [mutationResult, deletePostReaction] = useNotificationMutation<
    DeletePostReactionData,
    DeletePostReactionVariables
  >(DELETE_POST_REACTION, {
    ...options,
    getSuccessMessage: () => 'Reaction deleted',
  })

  const handleDeletePostReaction = async (
    values: DeletePostReactionVariables
  ) => deletePostReaction({ ...values })

  return [mutationResult, handleDeletePostReaction]
}

import { useRouter } from 'next/router'

import { OperationResult, UseMutationState } from 'urql'

import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { Acter } from '@acter/schema'
import DELETE_ACTER from '@acter/schema/mutations/acter-delete.graphql'

type ActerVariables = { acterId: string }
type DeleteActerData = { deleteActerCustom: Acter }
type HandleMethod = (
  acterId: string
) => Promise<OperationResult<DeleteActerData, ActerVariables>>
type DeleteActerOptions = UseMutationOptions<DeleteActerData, ActerVariables>

/**
 * To delete acter from DB and update cache
 * @param acterId
 * @returns delete handle method and mutation results
 */
export const useDeleteActer = (
  options?: DeleteActerOptions
): [UseMutationState<DeleteActerData, ActerVariables>, HandleMethod] => {
  const router = useRouter()
  const [mutationResult, deleteActer] = useNotificationMutation<
    DeleteActerData,
    ActerVariables
  >(DELETE_ACTER, {
    ...options,

    onCompleted: (data) => {
      options?.onCompleted?.(data)

      const redirectUrl = data?.deleteActerCustom?.Parent
        ? acterAsUrl({ acter: data.deleteActerCustom.Parent })
        : '/dashboard'
      router.push(redirectUrl)
    },

    // TODO: figure out why data is empty here so we can't use deleted Acter name in message
    // getSuccessMessage: ({deleteActerCustom: {name}}) => `${name} deleted`,
  })
  const handleDeleteActer = (acterId) => deleteActer({ acterId })

  return [mutationResult, handleDeleteActer]
}

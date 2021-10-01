import { useRouter } from 'next/router'

import { FetchResult, MutationResult } from '@apollo/client'

import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import DELETE_ACTER from '@acter/schema/mutations/acter-delete.graphql'

type ActerVariables = { acterId: string }
type HandleMethod = (acterId: string) => Promise<FetchResult>
type DeleteActerOptions = UseMutationOptions<any, ActerVariables>

/**
 * To delete acter from DB and update cache
 * @param acterId
 * @returns delete handle method and mutation results
 */
export const useDeleteActer = (
  options?: DeleteActerOptions
): [HandleMethod, MutationResult] => {
  const router = useRouter()
  const [deleteActer, { ...restQueryResult }] = useNotificationMutation(
    DELETE_ACTER,
    {
      ...options,
      update: (cache, { data }) =>
        cache.modify({
          id: cache.identify(data.deleteActerCustom),
          fields: (_, { DELETE }) => DELETE,
        }),

      onCompleted: (data) => {
        options?.onCompleted?.(data)

        const redirectUrl = data.deleteActerCustom.Parent
          ? acterAsUrl({ acter: data.deleteActerCustom.Parent })
          : '/dashboard'
        router.push(redirectUrl)
      },

      getSuccessMessage: (data) => `${data.deleteActerCustom.name} is deleted`,
    }
  )
  const handleDeleteActer = (acterId) => deleteActer({ variables: { acterId } })

  return [handleDeleteActer, { ...restQueryResult }]
}

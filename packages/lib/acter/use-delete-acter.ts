import { useRouter } from 'next/router'

import { FetchResult, MutationResult } from '@apollo/client'

import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'
import DELETE_ACTER from '@acter/schema/mutations/acter-delete.graphql'

type HandleMethod = (acterId: string) => Promise<FetchResult>

/**
 * To delete acter from DB and update cache
 * @param acterId
 * @returns delete handle method and mutation results
 */
export const useDeleteActer = (): [HandleMethod, MutationResult] => {
  const router = useRouter()
  const [deleteActer, { ...restQueryResult }] = useNotificationMutation(
    DELETE_ACTER,
    {
      update: (cache, { data }) =>
        cache.modify({
          id: cache.identify(data.deleteActer),
          fields: (_, { DELETE }) => DELETE,
        }),

      onCompleted: (data) => {
        const redirectUrl = data.deleteActer.Parent
          ? acterAsUrl({ acter: data.deleteActer.Parent })
          : '/dashboard'
        router.push(redirectUrl)
      },

      getSuccessMessage: (data) => `${data.deleteActer.name} is deleted`,
    }
  )
  const handleDeleteActer = (acterId) => deleteActer({ variables: { acterId } })

  return [handleDeleteActer, { ...restQueryResult }]
}

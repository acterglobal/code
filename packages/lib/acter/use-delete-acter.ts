import { FetchResult, MutationResult } from '@apollo/client'
import DELETE_ACTER from '@acter/schema/mutations/acter-delete.graphql'
import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useRouter } from 'next/router'

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
          ? acterAsUrl(data.deleteActer.Parent)
          : '/dashboard'
        router.push(redirectUrl)
      },

      onError: (err) => console.log('ERROR : ', err),
      getSuccessMessage: () => 'Acter deleted',
    }
  )
  const handleDeleteActer = (acterId) => deleteActer({ variables: { acterId } })

  return [handleDeleteActer, { ...restQueryResult }]
}

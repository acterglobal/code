import { MutationResult, FetchResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import DELETE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-delete.graphql'
import GET_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter, ActerConnection } from '@acter/schema'
import { ConnectionVariables } from '@acter/lib/acter/use-create-connection'

type DeleteConnectionData = {
  deleteActerConnection: ActerConnection
}

type DeleteConnectionOptions = UseMutationOptions<
  DeleteConnectionData,
  ConnectionVariables
>

type HandleMethod = (acter: Acter, follower: Acter) => Promise<FetchResult>

export const useDeleteActerConnection = (
  acter: Acter,
  options?: DeleteConnectionOptions
): [HandleMethod, MutationResult] => {
  const [deleteConnection, mutationResult] = useNotificationMutation(
    DELETE_ACTER_CONNECTION,
    {
      ...options,

      update: (cache, { data }) => {
        const withoutConnection = (a) => a.id !== data.deleteActerConnection.id
        acter.Followers = acter.Followers.filter(withoutConnection)

        cache.writeQuery({
          query: GET_ACTER,
          data: {
            getActer: acter,
          },
        })
      },
      getSuccessMessage: () => `Disconnected from ${acter.name}`,
    }
  )

  const handleDeleteConnection = (acter: Acter, follower: Acter) =>
    deleteConnection({
      variables: {
        followerActerId: follower.id,
        followingActerId: acter.id,
      },
    })

  return [handleDeleteConnection, mutationResult]
}

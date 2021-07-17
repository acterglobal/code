import { MutationResult, FetchResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import DELETE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-delete.graphql'
import GET_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter } from '@acter/schema/types'
import { ConnectionVariables } from '@acter/lib/acter/use-create-connection'

type DeleteConnectionData = {
  deleteActerConnection: any
}

type DeleteConnectionOptions = UseMutationOptions<
  DeleteConnectionData,
  ConnectionVariables
>

type HandleMethod<TData> = (
  acter: Acter,
  follower: Acter
) => Promise<FetchResult<TData, Record<string, any>, Record<string, any>>>

export const useDeleteActerConnection = (
  acter: Acter,
  options?: DeleteConnectionOptions
): [HandleMethod<DeleteConnectionData>, MutationResult] => {
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

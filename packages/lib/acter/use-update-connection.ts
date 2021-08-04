import { MutationResult, FetchResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import UPDATE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-update.graphql'
import {
  Acter,
  ActerConnection,
  ActerConnectionRole,
} from '@acter/schema/types'
import ACTER_CONNECTION_FRAGMENT from '@acter/schema/fragments/acter-connection-full.fragment.graphql'

type ConnectionVariables = {
  connection: ActerConnection
  role: ActerConnectionRole
}

type UpdateConnectionData = {
  updateActerConnection: ActerConnection
}

type CreateConnectionOptions = UseMutationOptions<
  UpdateConnectionData,
  ConnectionVariables
>

type HandleMethod = (
  connection: ActerConnection,
  role: ActerConnectionRole
) => Promise<FetchResult>

export const useUpdateActerConnection = (
  acter: Acter,
  options?: CreateConnectionOptions
): [HandleMethod, MutationResult] => {
  const [updateConnection, mutationResult] = useNotificationMutation(
    UPDATE_ACTER_CONNECTION,
    {
      update: (cache, result) => {
        typeof options?.update === 'function' && options.update(cache, result)

        const { updateActerConnection: connection } = result.data
        const connectionIndex = acter.Followers.findIndex(
          ({ Follower }) => Follower.id === connection.followerActerId
        )
        acter.Followers = [
          ...acter.Followers.slice(0, connectionIndex),
          connection,
          ...acter.Followers.slice(connectionIndex + 1, acter.Followers.length),
        ]
        cache.writeFragment({
          id: cache.identify(connection),
          fragment: ACTER_CONNECTION_FRAGMENT,
          fragmentName: 'ActerConnectionFull',
          data: connection,
        })
      },
    }
  )

  const handleUpdateConnection = (
    connection: ActerConnection,
    role: ActerConnectionRole
  ) =>
    updateConnection({
      variables: {
        connectionId: connection.id,
        role: role,
      },
    })

  return [handleUpdateConnection, mutationResult]
}

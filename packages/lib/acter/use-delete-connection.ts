import { OperationResult, UseMutationState } from 'urql'

import { ConnectionVariables } from '@acter/lib/acter/use-create-connection'
import DELETE_ACTER_CONNECTION from '@acter/lib/graphql/mutations/acter-connection-delete.graphql'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { Acter, ActerConnection } from '@acter/schema'

type DeleteConnectionData = {
  deleteActerConnection: ActerConnection
}

type DeleteConnectionOptions = UseMutationOptions<
  DeleteConnectionData,
  ConnectionVariables
>

export type HandleMethod = (
  acter: Acter,
  follower: Acter
) => Promise<OperationResult<DeleteConnectionData, ConnectionVariables>>

export const useDeleteActerConnection = (
  acter: Acter,
  options?: DeleteConnectionOptions
): [
  UseMutationState<DeleteConnectionData, ConnectionVariables>,
  HandleMethod
] => {
  const [mutationResult, deleteConnection] = useNotificationMutation(
    DELETE_ACTER_CONNECTION,
    {
      ...options,
      getSuccessMessage: () => `Disconnected from ${acter.name}`,
    }
  )

  const handleDeleteConnection = (acter: Acter, follower: Acter) =>
    deleteConnection({
      followerActerId: follower.id,
      followingActerId: acter.id,
    })

  return [mutationResult, handleDeleteConnection]
}

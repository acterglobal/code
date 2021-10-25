import { OperationResult, UseMutationState } from 'urql'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { Acter, ActerConnection } from '@acter/schema'
import CREATE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-create.graphql'

export type ConnectionVariables = {
  followerActerId: string
  followingActerId: string
}

type CreateConnectionData = {
  createActerConnectionCustom: ActerConnection
}

type CreateConnectionState = UseMutationOptions<
  CreateConnectionData,
  ConnectionVariables
>

export type HandleMethod<TData> = (
  acter: Acter,
  follower: Acter
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<OperationResult<TData, Record<string, any>>>

export const useCreateActerConnection = (
  acter: Acter,
  options?: CreateConnectionState
): [
  HandleMethod<CreateConnectionData>,
  UseMutationState<CreateConnectionData, ConnectionVariables>
] => {
  const [mutationResult, createConnection] = useNotificationMutation(
    CREATE_ACTER_CONNECTION,
    {
      ...options,
      getSuccessMessage: ({
        createActerConnectionCustom: {
          Follower: { name },
        },
      }) => `Connected to ${acter.name} as ${name}`,
    }
  )

  const handleCreateConnection = (acter: Acter, follower: Acter) =>
    createConnection({
      followerActerId: follower.id,
      followingActerId: acter.id,
    })

  return [handleCreateConnection, mutationResult]
}

import { OperationResult, UseMutationState } from 'urql'

import CREATE_ACTER_CONNECTION from '@acter/lib/graphql/mutations/acter-connection-create.graphql'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { Acter, ActerConnection, ActerConnectionRole } from '@acter/schema'

export type ConnectionVariables = {
  followerActerId: string
  followingActerId: string
  role?: ActerConnectionRole
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
  follower: Acter,
  role?: ActerConnectionRole
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<OperationResult<TData, Record<string, any>>>

export const useCreateActerConnection = (
  acter: Acter,
  options?: CreateConnectionState
): [
  UseMutationState<CreateConnectionData, ConnectionVariables>,
  HandleMethod<CreateConnectionData>
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

  const handleCreateConnection = (
    acter: Acter,
    follower: Acter,
    role: ActerConnectionRole = null
  ) =>
    createConnection({
      followerActerId: follower.id,
      followingActerId: acter.id,
      role,
    })

  return [mutationResult, handleCreateConnection]
}

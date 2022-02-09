import { OperationResult, UseMutationState } from 'urql'

import UPDATE_ACTER_CONNECTION from '@acter/lib/graphql/mutations/acter-connection-update.graphql'
import { useNotificationMutation } from '@acter/lib/urql/use-notification-mutation'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'

type UpdateActerConnectionData = {
  updateActerConnectionCustom: ActerConnection
}

type UpdateActerConnectionVariables = {
  connectionId: string
  role: ActerConnectionRole
}

type HandleMethod = (
  connection: ActerConnection,
  role: ActerConnectionRole
) => Promise<OperationResult<UpdateActerConnectionData>>

export const useUpdateActerConnection = (): [
  UseMutationState<UpdateActerConnectionData, UpdateActerConnectionVariables>,
  HandleMethod
] => {
  const [mutationResult, updateConnection] = useNotificationMutation<
    UpdateActerConnectionData,
    UpdateActerConnectionVariables
  >(UPDATE_ACTER_CONNECTION)

  const handleUpdateConnection = (
    connection: ActerConnection,
    role: ActerConnectionRole
  ) =>
    updateConnection({
      connectionId: connection.id,
      role: role,
    })

  return [mutationResult, handleUpdateConnection]
}

import { OperationResult, UseMutationState } from 'urql'

import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'
import UPDATE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-update.graphql'

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
  HandleMethod,
  UseMutationState<UpdateActerConnectionData, UpdateActerConnectionVariables>
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

  return [handleUpdateConnection, mutationResult]
}

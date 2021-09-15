import { MutationResult, FetchResult } from '@apollo/client'

import { useNotificationMutation } from '@acter/lib/apollo/use-notification-mutation'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'
import UPDATE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-update.graphql'

type UpdateActerConnectionData = {
  updateActerConnection: ActerConnection
}

type UpdateActerConnectionVariables = {
  connectionId: string
  role: ActerConnectionRole
}

type HandleMethod = (
  connection: ActerConnection,
  role: ActerConnectionRole
) => Promise<FetchResult<UpdateActerConnectionData>>

export const useUpdateActerConnection = (): [HandleMethod, MutationResult] => {
  const [updateConnection, mutationResult] = useNotificationMutation<
    UpdateActerConnectionData,
    UpdateActerConnectionVariables
  >(UPDATE_ACTER_CONNECTION)

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

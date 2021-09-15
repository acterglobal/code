import { MutationResult, FetchResult, Reference } from '@apollo/client'
import { Modifier } from '@apollo/client/cache/core/types/common'

import { ConnectionVariables } from '@acter/lib/acter/use-create-connection'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { Acter, ActerConnection } from '@acter/schema'
import DELETE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-delete.graphql'

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
) => Promise<FetchResult>

export const useDeleteActerConnection = (
  acter: Acter,
  options?: DeleteConnectionOptions
): [HandleMethod, MutationResult] => {
  const [deleteConnection, mutationResult] = useNotificationMutation(
    DELETE_ACTER_CONNECTION,
    {
      ...options,

      update: (cache, result, updateOptions) => {
        options?.update?.(cache, result, updateOptions)
        const {
          data: { deleteActerConnection },
        } = result

        const {
          variables: { followerActerId, followingActerId },
        } = updateOptions

        const removeRef: Modifier<Reference[]> = (prev, { readField }) =>
          prev.filter(
            (ref) => deleteActerConnection.id !== readField('id', ref)
          )

        cache.modify({
          id: `Acter:${followingActerId}`,
          fields: {
            Followers: removeRef,
          },
        })
        cache.modify({
          id: `Acter:${followerActerId}`,
          fields: {
            Following: removeRef,
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

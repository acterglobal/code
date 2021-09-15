import { MutationResult, FetchResult, StoreObject } from '@apollo/client'

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

type HandleMethod = (acter: Acter, follower: Acter) => Promise<FetchResult>

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
        const ref = cache.identify(
          (deleteActerConnection as unknown) as StoreObject
        )

        cache.modify({
          id: `Acter:${followingActerId}`,
          fields: {
            Followers: (prevFollowers) =>
              prevFollowers.filter((follower) => follower.__ref !== ref),
          },
        })
        cache.modify({
          id: `Acter:${followerActerId}`,
          fields: {
            Following: (prevFollowing) =>
              prevFollowing.filter((following) => following.__ref !== ref),
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

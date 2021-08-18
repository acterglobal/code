import { MutationResult, FetchResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import CREATE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-create.graphql'
import GET_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter, ActerConnection } from '@acter/schema'

export type ConnectionVariables = {
  followerActerId: string
  followingActerId: string
}

type CreateConnectionData = {
  createActerConnection: ActerConnection
}

type CreateConnectionOptions = UseMutationOptions<
  CreateConnectionData,
  ConnectionVariables
>

type HandleMethod = (acter: Acter, follower: Acter) => Promise<FetchResult>

export const useCreateActerConnection = (
  acter: Acter,
  options?: CreateConnectionOptions
): [HandleMethod, MutationResult] => {
  const [createConnection, mutationResult] = useNotificationMutation(
    CREATE_ACTER_CONNECTION,
    {
      ...options,

      update: (cache, result) => {
        if (typeof options?.update === 'function') {
          const { update, ...restOptions } = options
          update(cache, result, restOptions)
        }
        const { data } = result
        acter.Followers.push(data.createActerConnection)
        cache.writeQuery({
          query: GET_ACTER,
          data: {
            getActer: acter,
          },
        })
      },
      getSuccessMessage: ({
        createActerConnection: {
          Follower: { name },
        },
      }) => `Connected to ${acter.name} as ${name}`,
    }
  )

  const handleCreateConnection = (acter: Acter, follower: Acter) =>
    createConnection({
      variables: {
        followerActerId: follower.id,
        followingActerId: acter.id,
      },
    })

  return [handleCreateConnection, mutationResult]
}

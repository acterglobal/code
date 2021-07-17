import { MutationResult, FetchResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import CREATE_ACTER_CONNECTION from '@acter/schema/mutations/acter-connection-create.graphql'
import GET_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter } from '@acter/schema/types'

export type ConnectionVariables = {
  followerActerId: string
  followingActerId: string
}

type CreateConnectionData = {
  createActerConnection: any
}

type CreateConnectionOptions = UseMutationOptions<
  CreateConnectionData,
  ConnectionVariables
>

type HandleMethod<TData> = (
  acter: Acter,
  follower: Acter
) => Promise<FetchResult<TData, Record<string, any>, Record<string, any>>>

export const useCreateActerConnection = (
  acter: Acter,
  options?: CreateConnectionOptions
): [HandleMethod<CreateConnectionData>, MutationResult] => {
  const [createConnection, mutationResult] = useNotificationMutation(
    CREATE_ACTER_CONNECTION,
    {
      ...options,

      update: (cache, result) => {
        typeof options?.update === 'function' && options.update(cache, result)
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

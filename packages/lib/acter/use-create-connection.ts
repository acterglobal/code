import {
  MutationResult,
  FetchResult,
  StoreObject,
  Reference,
} from '@apollo/client'
import { Modifier } from '@apollo/client/cache/core/types/common'

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

      update: (cache, result, updateOptions) => {
        options?.update?.(cache, result, updateOptions)
        const {
          data: { createActerConnectionCustom },
        } = result
        const addIfNotExists: Modifier<Reference[]> = (
          prev,
          { readField, toReference }
        ) =>
          prev.some(
            (ref) => readField('id', ref) === createActerConnectionCustom.id
          )
            ? prev
            : [
                ...prev,
                toReference(
                  (createActerConnectionCustom as unknown) as StoreObject
                ),
              ]

        cache.modify({
          id: cache.identify(
            (createActerConnectionCustom.Following as unknown) as StoreObject
          ),
          fields: {
            Followers: addIfNotExists,
          },
        })
        cache.modify({
          id: cache.identify(
            (createActerConnectionCustom.Follower as unknown) as StoreObject
          ),
          fields: {
            Following: addIfNotExists,
          },
        })
      },
      getSuccessMessage: ({
        createActerConnectionCustom: {
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

import { MutationResult, FetchResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import ACTER_CREATE from '@acter/schema/mutations/acter-create.graphql'
import GET_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter, ActerInterest, ActerConnection } from '@acter/schema'

export type ActerVariables = Acter & {
  acterId?: string
  interestIds: ActerInterest[] | string[]
  followerIds: ActerConnection[] | string[]
}

type CreateActerData = {
  createActer: Acter
}

type CreateActerOptions = UseMutationOptions<CreateActerData, ActerVariables>

export type HandleMethod<TData> = (
  acter: ActerVariables
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<FetchResult<TData, Record<string, any>, Record<string, any>>>

/**
 * Custom hook that creates new acter
 * @param acter
 * @returns handle method to create acter
 * @returns mutation results from apollo
 */
export const useCreateActer = (
  options?: CreateActerOptions
): [HandleMethod<CreateActerData>, MutationResult] => {
  const [createActer, mutationResult] = useNotificationMutation<
    CreateActerData,
    ActerVariables
  >(ACTER_CREATE, {
    ...options,
    update: (cache, result) => {
      if (typeof options?.update === 'function') {
        const { update, ...restOptions } = options
        update(cache, result, restOptions)
      }
      const {
        data: { createActer },
      } = result

      cache.writeQuery({
        query: GET_ACTER,
        data: {
          getActer: createActer,
        },
      })
    },
    getSuccessMessage: (data: CreateActerData) =>
      `${data.createActer.name} group created`,
  })

  const handleCreateActer = (acter: ActerVariables) =>
    createActer({
      variables: {
        followerIds: [],
        interestIds: [],
        ...acter,
      },
    })

  return [handleCreateActer, mutationResult]
}

import { MutationResult, FetchResult, StoreObject } from '@apollo/client'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { Acter, ActerInterest, ActerConnection } from '@acter/schema'
import ACTER_CREATE from '@acter/schema/mutations/acter-create.graphql'

export type ActerVariables = Acter & {
  acterId?: string
  interestIds: ActerInterest[] | string[]
  followerIds: ActerConnection[] | string[]
}

export type CreateActerData = {
  createActerCustom: Acter
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
    getSuccessMessage: (data: CreateActerData) =>
      `${data.createActerCustom.name} group created`,
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

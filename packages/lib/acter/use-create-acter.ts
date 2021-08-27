import { MutationResult, FetchResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import ACTER_CREATE from '@acter/schema/mutations/acter-create.graphql'
import ACTER_FRAGMENT from '@acter/schema/fragments/group-acter.fragment.graphql'
import { Acter, ActerInterest, ActerConnection } from '@acter/schema'
import { ActerTypes } from '@acter/lib/constants'

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
  acter: Acter,
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
      const { createActer: newActer } = result.data

      console.log('NEW GROUP ', newActer)

      cache.modify({
        id: cache.identify(
          acter.ActerType.name === ActerTypes.GROUP ? acter.Parent : acter
        ),
        fields: {
          Children(existingActerRefs = []) {
            const newActerRef = cache.writeFragment({
              data: newActer,
              fragment: ACTER_FRAGMENT,
            })
            return [...existingActerRefs, newActerRef]
          },
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

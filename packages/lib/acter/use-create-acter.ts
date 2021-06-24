import { MutationResult, FetchResult } from '@apollo/client'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import ACTER_CREATE from '@acter/schema/mutations/acter-create.graphql'
import GET_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter } from '@acter/schema/types'

export type HandleMethod = (
  acter: Acter
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>

/**
 * Custom hook that creates new acter
 * @param acter
 * @returns handle method to create acter
 * @returns mutation results from apollo
 */
export const useCreateActer = (
  acter: Acter
): [HandleMethod, MutationResult] => {
  const [createActer, mutationResult] = useNotificationMutation(ACTER_CREATE, {
    update: (cache, { data }) => {
      acter.ActerType.name === ActerTypes.GROUP
        ? acter.Parent.Children.push(data.createActer)
        : acter.Children.push(data.createActer)

      cache.writeQuery({
        query: GET_ACTER,
        data: {
          getActer: acter,
        },
      })
    },
    getSuccessMessage: (data) => `${data.createActer.name} group created`,
  })

  const handleCreateActer = (acter: Acter) =>
    createActer({
      variables: {
        followerIds: [],
        ...acter,
        interestIds:
          acter.ActerInterests?.map(({ Interest: { id } }) => id) || [],
      },
    })

  return [handleCreateActer, mutationResult]
}

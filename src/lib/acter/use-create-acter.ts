import { MutationResult, FetchResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import ACTER_CREATE from 'api/mutations/acter-create.graphql'
import GET_ACTER from 'api/queries/acter-by-slug.graphql'
import { GROUP } from 'src/constants/acter-types'
import { Acter } from '@schema'

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
      acter.ActerType.name === GROUP
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

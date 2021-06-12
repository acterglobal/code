import { MutationResult } from '@apollo/client'
import { useNotificationMutation } from 'src/lib/apollo/use-notification-mutation'
import UPDATE_ACTER from 'api/mutations/acter-update.graphql'
import GET_ACTER from 'api/queries/acter-by-slug.graphql'
import { Acter } from '@schema'
import { HandleMethod } from 'src/lib/acter/use-create-acter'

/**
 * Custom hook that updates acter
 * @param acter
 * @returns handle method to update acter
 * @returns mutation results from apollo
 */
export const useUpdateActer = (
  acter: Acter,
  setActer: React.Dispatch<React.SetStateAction<Acter>>
): [HandleMethod, MutationResult] => {
  const [updateActer, mutationResult] = useNotificationMutation(UPDATE_ACTER, {
    update: (cache, { data }) => {
      const { updateActer: updatedActer } = data
      setActer(updatedActer)
      cache.writeQuery({
        query: GET_ACTER,
        data: {
          getActer: acter,
        },
      })
    },
    getSuccessMessage: (data) => `${data.updateActer.name} updated`,
  })

  const handleUpdateActer = (acter: Acter) =>
    updateActer({
      variables: {
        followerIds: [],
        ...acter,
        interestIds: acter.ActerInterests.map(({ Interest: { id } }) => id),
        acterId: acter.id,
      },
    })

  return [handleUpdateActer, mutationResult]
}

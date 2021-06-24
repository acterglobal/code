import { MutationResult } from '@apollo/client'
import {
  useNotificationMutation,
  UseMutationOptions,
} from '@acter/lib/apollo/use-notification-mutation'
import UPDATE_ACTER from '@acter/schema/mutations/acter-update.graphql'
import GET_ACTER from '@acter/schema/queries/acter-by-slug.graphql'
import { Acter } from '@acter/schema/types'
import { ActerVariables, HandleMethod } from '@acter/lib/acter/use-create-acter'

export type UpdateActerData = {
  updateActer: Acter
}

type UpdateActerOptions = UseMutationOptions<UpdateActerData, ActerVariables>

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

import { MutationResult } from '@apollo/client'
import {
  useNotificationMutation,
  UseMutationOptions,
} from 'src/lib/apollo/use-notification-mutation'
import UPDATE_ACTER from 'api/mutations/acter-update.graphql'
import GET_ACTER from 'api/queries/acter-by-slug.graphql'
import { Acter } from '@schema'
import { ActerVariables, HandleMethod } from 'src/lib/acter/use-create-acter'

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
  options?: UpdateActerOptions
): [HandleMethod<UpdateActerData>, MutationResult] => {
  const [updateActer, mutationResult] = useNotificationMutation<
    UpdateActerData,
    ActerVariables
  >(UPDATE_ACTER, {
    ...options,
    update: (cache, result) => {
      typeof options?.update === 'function' && options.update(cache, result)
      const {
        data: { updateActer },
      } = result
      cache.writeQuery({
        query: GET_ACTER,
        data: {
          getActer: updateActer,
        },
      })
    },
    getSuccessMessage: (data: UpdateActerData) =>
      `${data.updateActer.name} updated`,
  })

  const handleUpdateActer = (updatedActer: ActerVariables) =>
    updateActer({
      variables: {
        followerIds: [],
        ...acter,
        ...updatedActer,
        interestIds: updatedActer.interestIds
          ? updatedActer.interestIds
          : acter.ActerInterests.map(({ Interest: { id } }) => id),
        acterId: acter.id,
      },
    })

  return [handleUpdateActer, mutationResult]
}

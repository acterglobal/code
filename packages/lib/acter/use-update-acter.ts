import { MutationResult } from '@apollo/client'
import {
  useNotificationMutation,
  UseMutationOptions,
} from '@acter/lib/apollo/use-notification-mutation'
import UPDATE_ACTER from '@acter/schema/mutations/acter-update.graphql'
import { Acter } from '@acter/schema/types'
import { ActerVariables, HandleMethod } from '@acter/lib/acter/use-create-acter'
import {
  // TODO move these functions elsewhere
  _updatePicture,
  _updatePictures,
} from '@acter/lib/acter/update-acter-with-pictures'

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

// TODO Move to use this hook everywhere
export const useUpdateActer = (
  acter: Acter,
  options?: UpdateActerOptions
): [HandleMethod<UpdateActerData>, MutationResult] => {
  const [updateActer, mutationResult] = useNotificationMutation<
    UpdateActerData,
    ActerVariables
  >(UPDATE_ACTER, {
    ...options,
    getSuccessMessage: (data: UpdateActerData) =>
      `${data.updateActer.name} updated`,
  })

  const updateActerProfileWithPictures = async ({
    // Acter to be updated
    acter,
    // Form data with which to update Acter
    updatedActer = {},
    // Update function to save Acter info
    updateActer,
  }): // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Promise<any> => {
    const variables = {
      // Load existing Acter data
      ...acter,
      // Overwrite with form values
      ...updatedActer,
      // Explicitly set acterId
      acterId: acter.id,
    }

    const dataWithPics = await _updatePictures(variables)
    return updateActer({
      variables: {
        ...dataWithPics,
        followerIds: [],
        interestIds: acter.interestIds
          ? acter.interestIds
          : acter.ActerInterests.map(({ Interest: { id } }) => id),
        acterId: acter.id,
      },
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdateActer = async (
    updatedActer: ActerVariables
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> => {
    await updateActerProfileWithPictures({
      acter,
      updatedActer,
      updateActer,
    })
  }

  return [handleUpdateActer, mutationResult]
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutationResult } from '@apollo/client'
import {
  useNotificationMutation,
  UseMutationOptions,
} from '@acter/lib/apollo/use-notification-mutation'
import UPDATE_ACTER from '@acter/schema/mutations/acter-update.graphql'
import { Acter } from '@acter/schema'
import { ActerVariables, HandleMethod } from '@acter/lib/acter/use-create-acter'
import {
  // TODO move these functions elsewhere
  _updatePicture,
  _updatePictures,
} from '@acter/lib/acter/update-acter-with-pictures'

export type UpdateActerData = {
  updateActer: Acter
}

type UpdateActerProfileWithPicturesProps = {
  /**
   * Acter to be updated
   */
  acter: Acter
  /**
   * Form data with which to update Acter
   */
  updatedActer: any
  /**
   * Function to save Acter info
   */
  updateActer: (data: { variables: ActerVariables }) => Promise<any>
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
    acter,
    updatedActer = {},
    updateActer,
  }: UpdateActerProfileWithPicturesProps): Promise<any> => {
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
        followerIds: acter.Followers.map((id) => id),
        interestIds: acter.ActerInterests
          ? acter.ActerInterests
          : acter.ActerInterests.map(({ Interest: { id } }) => id),
        acterId: acter.id,
      },
    })
  }

  const handleUpdateActer = async (
    updatedActer: ActerVariables
  ): Promise<any> => {
    await updateActerProfileWithPictures({
      acter,
      updatedActer,
      updateActer,
    })
  }

  return [handleUpdateActer, mutationResult]
}

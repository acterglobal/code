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
    getSuccessMessage: (data: UpdateActerData) =>
      `${data.updateActer.name} updated`,
    ...options,
  })

  const handleUpdateActer = async (
    updatedActer: ActerVariables
  ): Promise<any> => {
    console.log('Updating with useUpdateActer')
    const acterId = acter?.id ? acter.id : updatedActer.id
    const variables = {
      // Load existing Acter data
      ...acter,
      // Overwrite with form values
      ...updatedActer,
      acterId,
    }

    const setInterestIds = (
      updatedActer: { interestIds: any },
      acter: Acter
    ) => {
      const interestIds = updatedActer.interestIds
        ? updatedActer.interestIds
        : acter?.ActerInterests?.map(({ Interest: { id } }) => id) || []
      return interestIds
    }

    const setFollowerIds = (
      updatedActer: { followerIds: any },
      acter: Acter
    ) => {
      const followerIds = updatedActer.followerIds
        ? updatedActer.followerIds
        : acter?.Followers?.map(({ Follower: { id } }) => id) || []
      return followerIds
    }

    const dataWithPics = await _updatePictures(variables)
    return updateActer({
      variables: {
        ...dataWithPics,
        followerIds: setFollowerIds(updatedActer, acter),
        interestIds: setInterestIds(updatedActer, acter),
      },
    })
  }

  return [handleUpdateActer, mutationResult]
}

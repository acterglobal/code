import { UseMutationState } from 'urql'

import {
  // TODO move these functions elsewhere
  _updatePicture,
  _updatePictures,
} from '@acter/lib/acter/update-acter-with-pictures'
import { ActerVariables, HandleMethod } from '@acter/lib/acter/use-create-acter'
import {
  useNotificationMutation,
  UseMutationOptions,
} from '@acter/lib/urql/use-notification-mutation'
import { Acter } from '@acter/schema'
import UPDATE_ACTER from '@acter/schema/mutations/acter-update.graphql'

export type UpdateActerData = {
  updateActerCustom: Acter
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
): [
  HandleMethod<UpdateActerData>,
  UseMutationState<UpdateActerData, ActerVariables>
] => {
  const [mutationResult, updateActer] = useNotificationMutation<
    UpdateActerData,
    ActerVariables
  >(UPDATE_ACTER, {
    getSuccessMessage: (data: UpdateActerData) =>
      `${data.updateActerCustom.name} updated`,
    ...options,
  })

  const handleUpdateActer = async (
    updatedActer: ActerVariables
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> => {
    const acterId = acter?.id ? acter.id : updatedActer.id
    const variables = {
      // Load existing Acter data
      ...acter,
      // Overwrite with form values
      ...updatedActer,
      acterId,
    }

    const setInterestIds = (
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      updatedActer: { interestIds: any },
      acter: Acter
    ) => {
      const interestIds = updatedActer.interestIds
        ? updatedActer.interestIds
        : acter?.ActerInterests?.map(({ Interest: { id } }) => id) || []
      return interestIds
    }

    const setFollowerIds = (
      //eslint-disable-next-line @typescript-eslint/no-explicit-any
      updatedActer: { followerIds: any },
      acter: Acter
    ) => {
      const followerIds = updatedActer.followerIds
        ? updatedActer.followerIds
        : acter?.Followers?.map(({ Follower: { id } }) => id) || []
      return followerIds
    }

    const dataWithPics = (await _updatePictures(variables)) as ActerVariables
    return updateActer({
      ...dataWithPics,
      followerIds: setFollowerIds(updatedActer, acter),
      interestIds: setInterestIds(updatedActer, acter),
    })
  }

  return [handleUpdateActer, mutationResult]
}

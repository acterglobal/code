/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutationResult } from '@apollo/client'
import { useRouter, NextRouter } from 'next/router'
import {
  useNotificationMutation,
  UseMutationOptions,
} from '@acter/lib/apollo/use-notification-mutation'
import UPDATE_ACTIVITY from '@acter/schema/mutations/activity-update.graphql'
import { Acter, Activity } from '@acter/schema'
import { ActerVariables, HandleMethod } from '@acter/lib/acter/use-create-acter'
import { prepareActivityValues } from '@acter/lib/acter/prepare-activity-values'
import {
  // TODO move these functions elsewhere
  _updatePicture,
  _updatePictures,
} from '@acter/lib/acter/update-acter-with-pictures'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { ActerTypes } from '@acter/lib/constants/acter-types'

const { USER } = ActerTypes

export type UpdateActivityData = {
  updateActivity: Activity
}

type UpdateActerProfileWithPicturesProps = {
  /**
   * Activity to be updated
   */
  acter: Acter
  /**
   * Form data with which to update Activity
   */
  updatedActivity: any
  /**
   * Function to save Activity info
   */
  updateActivity: (data: { variables: any }) => Promise<any>
}

type UpdateActerOptions = UseMutationOptions<UpdateActivityData, ActerVariables>

/**
 * Custom hook that updates activity
 * @param acter
 * @returns handle method to update activity
 * @returns mutation results from apollo
 */

// TODO Move to use this hook everywhere
export const useUpdateActivity = (
  acter: Acter,
  options?: UpdateActerOptions
): [HandleMethod<UpdateActivityData>, MutationResult] => {
  const router: NextRouter = useRouter()

  const [updateActivity, mutationResult] = useNotificationMutation<
    UpdateActivityData,
    ActerVariables
  >(UPDATE_ACTIVITY, {
    ...options,
    getSuccessMessage: (data: UpdateActivityData) =>
      `${data.updateActivity.Acter.name} updated`,
    onCompleted: (data: UpdateActivityData) => {
      console.log('Updated activity ', data.updateActivity),
        router.push(acterAsUrl({ acter }))
    },
  })

  const updateActerProfileWithPictures = async ({
    acter,
    updatedActivity = {},
    updateActivity,
  }: UpdateActerProfileWithPicturesProps): Promise<any> => {
    const variables = {
      // Load existing Acter data
      ...acter,
      // Overwrite with form values
      ...updatedActivity,
      // Explicitly set acterId
      acterId: acter.id,
    }

    const setInterestIds = (
      updatedActivity: { interestIds: any },
      acter: Acter
    ) => {
      const interestIds = updatedActivity.interestIds
        ? updatedActivity.interestIds
        : acter.ActerInterests.map(({ Interest: { id } }) => id) || []
      return interestIds
    }

    const setFollowerIds = (
      updatedActivity: { followerIds: any },
      acter: Acter
    ) => {
      const followerIds = updatedActivity.followerIds
        ? updatedActivity.followerIds
        : acter.Followers.map(({ Follower: { id } }) => id) || []
      return followerIds
    }

    const activityData = prepareActivityValues(variables)
    const dataWithPics = await _updatePictures(activityData)
    console.log('Activity check')

    return updateActivity({
      variables: {
        ...dataWithPics,
        followerIds: setFollowerIds(updatedActivity, acter),
        interestIds: setInterestIds(updatedActivity, acter),
        acterId: acter.id,
      },
    })
  }

  const handleUpdateActer = async (updatedActivity): Promise<any> => {
    await updateActerProfileWithPictures({
      acter,
      updatedActivity,
      updateActivity,
    })
  }

  return [handleUpdateActer, mutationResult]
}

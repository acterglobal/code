import { OperationResult, UseMutationState } from 'urql'

import {
  ActivityFormData,
  prepareActivityValues,
} from '@acter/lib/acter/prepare-activity-values'
import { _updatePictures } from '@acter/lib/acter/update-acter-with-pictures'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { Activity } from '@acter/schema'
import UPDATE_ACTIVITY from '@acter/schema/mutations/activity-update.graphql'

export type ActivityVariables = ActivityFormData

export type UpdateActivityData = {
  updateActivityCustom: Activity
}

type UpdateActivityOptions = UseMutationOptions<
  UpdateActivityData,
  ActivityVariables
>

export type HandleMethod = (
  activity: ActivityVariables
) => Promise<OperationResult<UpdateActivityData, ActivityVariables>>

/**
 * Custom hook that updates new activity
 * @param options
 * @returns handle method to update activity
 * @returns mutation results from apollo
 */
export const useUpdateActivity = (
  options?: UpdateActivityOptions
): [HandleMethod, UseMutationState<UpdateActivityData, ActivityVariables>] => {
  const [mutationResult, updateActivity] = useNotificationMutation<
    UpdateActivityData,
    ActivityVariables
  >(UPDATE_ACTIVITY, {
    ...options,
    getSuccessMessage: () => `Activity updated`,
  })

  const handleCreateActivity = async (formData: ActivityVariables) => {
    const data = prepareActivityValues(formData)
    const dataWithPic = await _updatePictures(data)

    return updateActivity({
      ...dataWithPic,
    })
  }

  return [handleCreateActivity, mutationResult]
}

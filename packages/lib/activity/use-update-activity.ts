import { OperationResult, UseMutationState } from 'urql'

import {
  ActivityFormData,
  prepareActivityValues,
} from '@acter/lib/acter/prepare-activity-values'
import { _updatePictures } from '@acter/lib/acter/update-acter-with-pictures'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
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
  activity: ActivityVariables,
  options?: UpdateActivityOptions
) => Promise<OperationResult<UpdateActivityData, ActivityVariables>>

/**
 * Custom hook that updates new activity
 * @param options
 * @returns handle method to update activity
 * @returns mutation results
 */
export const useUpdateActivity = (
  activity: Activity,
  options?: UpdateActivityOptions
): [UseMutationState<UpdateActivityData, ActivityVariables>, HandleMethod] => {
  const [mutationResult, updateActivity] = useNotificationMutation<
    UpdateActivityData,
    ActivityVariables
  >(UPDATE_ACTIVITY, {
    ...options,
    getSuccessMessage: (data: UpdateActivityData) =>
      `${data.updateActivityCustom.Acter.name} Activity updated`,
    ...options,
  })

  const handleCreateActivity = async (
    updatedActivity: ActivityVariables
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<any> => {
    const acterId = activity?.Acter?.id
      ? activity.Acter.id
      : updatedActivity.Acter.id
    const variables = {
      ...activity,
      ...updatedActivity,
      acterId,
    }

    const data = prepareActivityValues(variables)
    const dataWithPic = (await _updatePictures(data)) as ActivityVariables

    return updateActivity({
      ...dataWithPic,
    })
  }

  return [mutationResult, handleCreateActivity]
}

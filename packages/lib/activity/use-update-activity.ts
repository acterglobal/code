import { MutationResult, FetchResult } from '@apollo/client'

import {
  ActivityFormData,
  prepareActivityValues,
} from '@acter/lib/acter/prepare-activity-values'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { Activity } from '@acter/schema'
import UPDATE_ACTIVITY from '@acter/schema/mutations/activity-update.graphql'

export type ActivityVariables = ActivityFormData & {
  followerIds: string[]
}

export type UpdateActivityData = {
  updateActivityCustom: Activity
}

type UpdateActivityOptions = UseMutationOptions<
  UpdateActivityData,
  ActivityVariables
>

export type HandleMethod = (activity: ActivityVariables) => Promise<FetchResult>

/**
 * Custom hook that updates new activity
 * @param options
 * @returns handle method to update activity
 * @returns mutation results from apollo
 */
export const useUpdateActivity = (
  options?: UpdateActivityOptions
): [HandleMethod, MutationResult] => {
  const [updateActivity, mutationResult] = useNotificationMutation<
    UpdateActivityData,
    ActivityVariables
  >(UPDATE_ACTIVITY, {
    ...options,
    getSuccessMessage: () => `Activity created`,
    onError: (err) => console.log('ERROR ....', err),
  })

  const handleCreateActivity = (data: ActivityVariables) =>
    updateActivity({
      variables: {
        acterId: data.id,
        followerIds: [],
        ...prepareActivityValues(data),
      },
    })

  return [handleCreateActivity, mutationResult]
}

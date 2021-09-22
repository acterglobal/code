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
import CREATE_ACTIVITY from '@acter/schema/mutations/activity-create.graphql'

export type ActivityVariables = ActivityFormData

export type CreateActivityData = {
  createActivityCustom: Activity
}

type CreateActivityOptions = UseMutationOptions<
  CreateActivityData,
  ActivityVariables
>

export type HandleMethod = (activity: ActivityVariables) => Promise<FetchResult>

/**
 * Custom hook that creates new activity
 * @param options
 * @returns handle method to create activity
 * @returns mutation results from apollo
 */
export const useCreateActivity = (
  options?: CreateActivityOptions
): [HandleMethod, MutationResult] => {
  const [createActivity, mutationResult] = useNotificationMutation<
    CreateActivityData,
    ActivityVariables
  >(CREATE_ACTIVITY, {
    ...options,
    getSuccessMessage: () => `Activity created`,
  })

  const handleCreateActivity = (data: ActivityVariables) =>
    createActivity({ variables: { ...prepareActivityValues(data) } })

  return [handleCreateActivity, mutationResult]
}

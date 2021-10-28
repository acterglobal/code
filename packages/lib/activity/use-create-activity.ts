import { OperationResult, UseMutationState } from 'urql'

import {
  ActivityFormData,
  prepareActivityValues,
} from '@acter/lib/acter/prepare-activity-values'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
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

export type HandleMethod = (
  activity: ActivityVariables
) => Promise<OperationResult<CreateActivityData, ActivityVariables>>

/**
 * Custom hook that creates new activity
 * @param options
 * @returns handle method to create activity
 * @returns mutation results
 */
export const useCreateActivity = (
  options?: CreateActivityOptions
): [HandleMethod, UseMutationState<CreateActivityData, ActivityVariables>] => {
  const [mutationResult, createActivity] = useNotificationMutation<
    CreateActivityData,
    ActivityVariables
  >(CREATE_ACTIVITY, {
    ...options,
    getSuccessMessage: ({ createActivityCustom }) =>
      `${createActivityCustom?.Acter?.name} created`,
  })

  const handleCreateActivity = (data: ActivityVariables) =>
    createActivity({ ...prepareActivityValues(data) })

  return [handleCreateActivity, mutationResult]
}

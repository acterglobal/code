import { useEffect, useState } from 'react'

import { useUpdateActivity } from './use-update-activity'
import { OperationResult, UseMutationState } from 'urql'

import {
  ActivityFormData,
  prepareActivityValues,
} from '@acter/lib/acter/prepare-activity-values'
import CREATE_ACTIVITY from '@acter/lib/graphql/mutations/activity-create.graphql'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { Activity } from '@acter/schema'

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
): [UseMutationState<CreateActivityData, ActivityVariables>, HandleMethod] => {
  const [formData, setFormData] = useState(null)
  const [newActivity, setNewActivity] = useState(null)
  const [_, updateActivity] = useUpdateActivity()

  useEffect(() => {
    if (newActivity && formData) {
      updateActivity({
        ...newActivity,
        ...formData,
        acterId: newActivity.Acter.id,
      })
    }
  }, [newActivity])

  const [mutationResult, createActivity] = useNotificationMutation<
    CreateActivityData,
    ActivityVariables
  >(CREATE_ACTIVITY, {
    ...options,
    onCompleted: (data) => {
      options?.onCompleted?.(data)
      setNewActivity(data.createActivityCustom)
    },
    getSuccessMessage: ({ createActivityCustom }) =>
      `${createActivityCustom?.Acter?.name} created`,
  })

  const handleCreateActivity = (data: ActivityVariables) => {
    setFormData(data)
    return createActivity({ ...prepareActivityValues(data) })
  }

  return [mutationResult, handleCreateActivity]
}

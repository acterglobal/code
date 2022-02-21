import { useEffect, useState } from 'react'

import { UpdateActivityData, useUpdateActivity } from './use-update-activity'
import { CombinedError, OperationResult, UseMutationState } from 'urql'

import { ActivityFormData } from '@acter/lib/acter/prepare-activity-values'
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

type ActivityData = CreateActivityData | UpdateActivityData

type CreateActivityOptions = UseMutationOptions<
  CreateActivityData,
  ActivityVariables
>

export type HandleMethod<TData> = (
  activity: ActivityVariables
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<OperationResult<TData, Record<string, any>>>

type CreateActivityUseMutationState = UseMutationState<
  ActivityData,
  ActivityVariables
>
type CreateActivityUseMutationRestState = Omit<
  CreateActivityUseMutationState,
  'data' | 'fetching' | 'error>'
>

/**
 * Custom hook that creates new activity
 * @param options
 * @returns handle method to create activity
 * @returns mutation results
 */
export const useCreateActivity = (
  options?: CreateActivityOptions
): [CreateActivityUseMutationState, HandleMethod<ActivityData>] => {
  const [fetching, setFetching] = useState(false)
  const [resultData, setResultData] = useState<ActivityData>(null)
  const [error, setError] = useState<CombinedError>()
  const [
    restState,
    setRestState,
  ] = useState<CreateActivityUseMutationRestState>()

  const [
    { fetching: updateFetching, error: updateError, ...updateRestState },
    updateActivity,
  ] = useUpdateActivity({} as Activity, {
    getSuccessMessage: (data) =>
      `Images uploaded for ${data.updateActivityCustom.Acter.name}`,
  })

  const [
    { fetching: createFetching, error: createError, ...createRestState },
    createActivity,
  ] = useNotificationMutation<CreateActivityData, ActivityVariables>(
    CREATE_ACTIVITY,
    {
      ...options,
      getSuccessMessage: (data: CreateActivityData) => {
        return `${data.createActivityCustom?.Acter?.name} Activity created`
      },
    }
  )

  useEffect(() => {
    setFetching(createFetching || updateFetching)
  }, [createFetching, updateFetching])

  useEffect(() => {
    setError(createError || updateError)
  }, [createError, updateError])

  useEffect(() => {
    setRestState({
      ...createRestState,
      ...updateRestState,
    })
  }, [JSON.stringify(createRestState), JSON.stringify(updateRestState)])

  const handleCreateActivity: HandleMethod<UpdateActivityData> = async (
    activity
  ) => {
    setFetching(true)
    const { data } = await createActivity({
      ...activity,
    })

    const updateResult = await updateActivity({
      ...activity,
      ...data.createActivityCustom,
    })

    setResultData(updateResult.data)

    return updateResult
  }

  return [
    { data: resultData, fetching, error, ...restState },
    handleCreateActivity,
  ]
}

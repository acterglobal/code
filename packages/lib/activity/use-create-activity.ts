import { useEffect, useState } from 'react'

import { CombinedError, OperationResult, UseMutationState } from 'urql'

import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { Activity } from '@acter/schema'
import CREATE_ACTIVITY from '@acter/schema/mutations/activity-create.graphql'

import { useTranslation } from '../i18n/use-translation'
import { UpdateActivityData, useUpdateActivity } from './use-update-activity'

export interface ActivityVariables extends Activity {
  interestIds: string[]
  followerIds: string[]
}

export type CreateActivityData = {
  createActivityCustom: Activity
}

type ActivityData = CreateActivityData | UpdateActivityData

type CreateActivityOptions = UseMutationOptions<
  CreateActivityData,
  ActivityVariables
>

export type HandleMethod<CreateActivityData, ActivityVariables> = (
  activity: ActivityVariables
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<OperationResult<CreateActivityData, ActivityVariables>>

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
): [
  CreateActivityUseMutationState,
  HandleMethod<CreateActivityData, ActivityVariables>
] => {
  const { t } = useTranslation('success_messages')
  const [fetching, setFetching] = useState(false)
  const [resultData, setResultData] = useState<ActivityData>(null)
  const [error, setError] = useState<CombinedError>()
  const [restState, setRestState] =
    useState<CreateActivityUseMutationRestState>()

  const isNewActivity = true

  const [
    { fetching: updateFetching, error: updateError, ...updateRestState },
    updateActivity,
  ] = useUpdateActivity({} as Activity, {}, isNewActivity)

  const [
    { fetching: createFetching, error: createError, ...createRestState },
    createActivity,
  ] = useNotificationMutation<CreateActivityData, ActivityVariables>(
    CREATE_ACTIVITY,
    {
      ...options,
      getSuccessMessage: ({ createActivityCustom }) =>
        t('activityCreated', {
          activityName: createActivityCustom?.Acter?.name,
        }),
    }
  )

  useEffect(() => {
    if (createFetching || updateFetching) setFetching(true)
  }, [createFetching, updateFetching])

  useEffect(() => {
    if (createError || updateError) {
      setError(createError || updateError)
      setFetching(false)
    }
  }, [createError, updateError])

  useEffect(() => {
    setRestState({
      ...createRestState,
      ...updateRestState,
    })
  }, [JSON.stringify(createRestState), JSON.stringify(updateRestState)])

  const handleCreateActivity: HandleMethod<
    CreateActivityData,
    ActivityVariables
  > = async (activity) => {
    setFetching(true)
    const { data } = await createActivity({
      ...activity,
    })

    const updateResult = await updateActivity({
      ...activity,
      ...data?.createActivityCustom,
    })

    setFetching(false)
    setResultData(updateResult?.data)

    return updateResult
  }

  return [
    { data: resultData, fetching, error, ...restState },
    handleCreateActivity,
  ]
}

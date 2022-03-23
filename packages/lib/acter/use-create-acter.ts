import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { CombinedError, OperationResult, UseMutationState } from 'urql'

import {
  UpdateActerData,
  useUpdateActer,
} from '@acter/lib/acter/use-update-acter'
import { ActerTypes } from '@acter/lib/constants'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { Acter, ActerInterest, ActerConnection } from '@acter/schema'
import ACTER_CREATE from '@acter/schema/mutations/acter-create.graphql'

import { acterAsUrl } from './acter-as-url'

export interface ActerVariables extends Acter {
  acterId?: string
  interestIds: ActerInterest[] | string[]
  followerIds: ActerConnection[] | string[]
}

export type CreateActerData = {
  createActerCustom: Acter
}

type ActerData = CreateActerData | UpdateActerData

type CreateActerOptions = UseMutationOptions<CreateActerData, ActerVariables>

export type HandleMethod<TData> = (
  acter: ActerVariables
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<OperationResult<TData, Record<string, any>>>

type CreateActerUseMutationState = UseMutationState<ActerData, ActerVariables>
type CreateActerUseMutationRestState = Omit<
  CreateActerUseMutationState,
  'data' | 'fetching' | 'error>'
>

/**
 * Custom hook that creates new acter
 * @param acter
 * @returns handle method to create acter
 * @returns mutation results
 */
export const useCreateActer = (
  options?: CreateActerOptions
): [CreateActerUseMutationState, HandleMethod<ActerData>] => {
  const [fetching, setFetching] = useState(false)
  const [resultData, setResultData] = useState<ActerData>(null)
  const [error, setError] = useState<CombinedError>()
  const [restState, setRestState] = useState<CreateActerUseMutationRestState>()
  const router = useRouter()

  const [
    { fetching: updateFetching, error: updateError, ...updateRestState },
    updateActer,
  ] = useUpdateActer({} as Acter, {
    getSuccessMessage: (data) =>
      `Images uploaded for ${data.updateActerCustom.name}`,
  })

  const [
    {
      data: createData,
      fetching: createFetching,
      error: createError,
      ...createRestState
    },
    createActer,
  ] = useNotificationMutation<CreateActerData, ActerVariables>(ACTER_CREATE, {
    ...options,
    getSuccessMessage: (data: CreateActerData) => {
      return `${data.createActerCustom.name} ${data.createActerCustom.ActerType.name} created`
    },
  })

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

  const handleCreateActer: HandleMethod<UpdateActerData> = async (acter) => {
    setFetching(true)
    const { data } = await createActer({
      followerIds: [],
      interestIds: [],
      ...acter,
    })

    // Bypass image upload osv. for Groups
    if (data.createActerCustom?.ActerType?.name === ActerTypes.GROUP) {
      setFetching(false)
      setResultData(createData)
      return
    }

    const updateResult = await updateActer({
      followerIds: [],
      interestIds: [],
      ...acter,
      ...data.createActerCustom,
    })

    setFetching(false)
    setResultData(updateResult.data)
    router.push(acterAsUrl({ acter: updateResult.data.updateActerCustom }))

    return updateResult
  }

  return [
    { data: resultData, fetching, error, ...restState },
    handleCreateActer,
  ]
}

import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { acterAsUrl } from './acter-as-url'
import { CombinedError, OperationResult, UseMutationState } from 'urql'

import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { ActerTypes } from '@acter/lib/constants'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/urql/use-notification-mutation'
import { Acter, ActerInterest, ActerConnection } from '@acter/schema'
import ACTER_CREATE from '@acter/schema/mutations/acter-create.graphql'

export interface ActerVariables extends Acter {
  acterId?: string
  interestIds: ActerInterest[] | string[]
  followerIds: ActerConnection[] | string[]
}

export type CreateActerData = {
  createActerCustom: Acter
}

type CreateActerOptions = UseMutationOptions<CreateActerData, ActerVariables>

export type HandleMethod<TData> = (
  acter: ActerVariables
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
) => Promise<OperationResult<TData, Record<string, any>>>

type CreateActerUseMutationState = UseMutationState<
  CreateActerData,
  ActerVariables
>
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
): [CreateActerUseMutationState, HandleMethod<CreateActerData>] => {
  const [fetching, setFetching] = useState(false)
  const [resultData, setResultData] = useState<CreateActerData>(null)
  const [error, setError] = useState<CombinedError>()
  const [restState, setRestState] = useState<CreateActerUseMutationRestState>()
  const router = useRouter()

  const [
    updateActer,
    {
      data: updateData,
      fetching: updateFetching,
      error: updateError,
      ...updateRestState
    },
  ] = useUpdateActer({} as Acter)

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

  useEffect(() => {
    if (createData?.createActerCustom) {
      // Bypass image upload osv. for Groups
      if (createData.createActerCustom?.ActerType?.name === ActerTypes.GROUP) {
        setFetching(false)
        setResultData(createData)
        return
      }

      updateActer({
        followerIds: [],
        interestIds: [],
        ...createData.createActerCustom,
      })
    }
  }, [JSON.stringify(createData)])

  useEffect(() => {
    if (updateData) {
      setResultData({ createActerCustom: updateData.updateActerCustom })
      router.push(acterAsUrl({ acter: updateData.updateActerCustom }))
    }
  }, [JSON.stringify(updateData)])

  const handleCreateActer: HandleMethod<CreateActerData> = async (acter) => {
    setFetching(true)
    const result = await createActer({
      followerIds: [],
      interestIds: [],
      ...acter,
    })
    return result
  }

  return [
    { data: resultData, fetching, error, ...restState },
    handleCreateActer,
  ]
}

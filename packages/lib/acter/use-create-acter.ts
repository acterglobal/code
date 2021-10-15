import { useEffect, useState } from 'react'

import { MutationResult, FetchResult } from '@apollo/client'

import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import {
  UseMutationOptions,
  useNotificationMutation,
} from '@acter/lib/apollo/use-notification-mutation'
import { ActerTypes } from '@acter/lib/constants'
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
) => Promise<FetchResult<TData, Record<string, any>, Record<string, any>>>

/**
 * Custom hook that creates new acter
 * @param acter
 * @returns handle method to create acter
 * @returns mutation results from apollo
 */
export const useCreateActer = (
  options?: CreateActerOptions
): [HandleMethod<CreateActerData>, MutationResult] => {
  const [formData, setFormData] = useState(null)
  const [newActer, setNewActer] = useState(null)
  const [updateActer] = useUpdateActer(newActer)

  useEffect(() => {
    if (newActer && formData) updateActer(formData)
  }, [newActer])

  const [createActer, mutationResult] = useNotificationMutation<
    CreateActerData,
    ActerVariables
  >(ACTER_CREATE, {
    ...options,
    getSuccessMessage: (data: CreateActerData) =>
      `${data.createActerCustom.name} ${data.createActerCustom.ActerType.name} created`,

    onCompleted: (data) => {
      options?.onCompleted?.(data)
      if (data.createActerCustom.ActerType.name !== ActerTypes.GROUP) {
        setNewActer(data.createActerCustom)
      }
    },
  })

  const handleCreateActer = (acter: ActerVariables) => {
    setFormData(acter)
    return createActer({
      variables: {
        followerIds: [],
        interestIds: [],
        ...acter,
      },
    })
  }

  return [handleCreateActer, mutationResult]
}

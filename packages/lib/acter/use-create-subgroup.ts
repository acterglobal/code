import { FetchResult, MutationResult, StoreObject } from '@apollo/client'

import { addToCacheList } from '../apollo/add-to-cache-list'

import {
  useCreateActer,
  CreateActerData,
  ActerVariables,
} from '@acter/lib/acter/use-create-acter'
import { UseMutationOptions } from '@acter/lib/apollo'
import { Acter } from '@acter/schema'

type UseCreateSubGroupOptions = UseMutationOptions<
  CreateActerData,
  ActerVariables
>

type UseCreateSubGroupFunction = (
  acter: Acter
) => Promise<FetchResult<CreateActerData>>

type UseCreateSubGroupResultTuple = [UseCreateSubGroupFunction, MutationResult]

export const useCreateSubGroup = (
  acter: Acter,
  options?: UseCreateSubGroupOptions
): UseCreateSubGroupResultTuple => {
  return useCreateActer({
    update: (cache, result, updateOptions) => {
      options?.update?.(cache, result, updateOptions)
      const {
        data: { createActerCustom },
      } = result
      cache.modify({
        id: cache.identify((acter as unknown) as StoreObject),
        fields: {
          Children: addToCacheList(createActerCustom),
        },
      })
    },
  })
}

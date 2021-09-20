import { useMemo } from 'react'

import {
  SearchType,
  ActivitySearchTypes,
  ActerSearchTypes,
  ActivityTypes,
  ActerTypes,
} from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'

export type SearchTypes = ActivityTypes | ActerTypes

export const useSearchTypes = (): SearchTypes[] => {
  const searchType = useSearchType()
  return useMemo(
    () =>
      searchType === SearchType.ACTIVITIES
        ? ActivitySearchTypes
        : ActerSearchTypes,
    [searchType]
  )
}

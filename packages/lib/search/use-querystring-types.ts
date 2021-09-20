import { useMemo } from 'react'

import { useRouter } from 'next/router'

import {
  ActerSearchTypes,
  ActivitySearchTypes,
  SearchType,
} from '@acter/lib/constants'
import { useSearchType } from '@acter/lib/search/use-search-type'

export const useQuerystringTypes = (): string[] => {
  const searchType = useSearchType()
  const router = useRouter()
  const { query } = router

  const defaultSearchTypes =
    searchType === SearchType.ACTIVITIES
      ? ActivitySearchTypes
      : ActerSearchTypes

  return useMemo(() => {
    return query?.types
      ? Array.isArray(query.types)
        ? query.types
        : query.types.split(',')
      : defaultSearchTypes
  }, [query.types])
}

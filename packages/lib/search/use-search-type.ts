import { useMemo } from 'react'

import { useRouter } from 'next/router'

import { SearchType } from '../constants'

export const useSearchType = (): SearchType => {
  const router = useRouter()
  return useMemo(
    () =>
      router.pathname.match(/\/activities$/)
        ? SearchType.ACTIVITIES
        : SearchType.ACTERS,
    [router.pathname]
  )
}

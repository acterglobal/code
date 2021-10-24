import { injectable } from 'react-magnetic-di/macro'

import {
  useActerSearch,
  UseActerSearchQueryResults,
} from '../search/use-acter-search'

import { Acter } from '@acter/schema'

export const useActerSearchDi = (acters: Acter[] = []): typeof useActerSearch =>
  injectable(
    useActerSearch,
    () =>
      (({
        acters,
        loading: false,
      } as unknown) as UseActerSearchQueryResults)
  )

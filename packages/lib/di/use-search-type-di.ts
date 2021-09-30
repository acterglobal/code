import { injectable } from 'react-magnetic-di/macro'

import { SearchType } from '../constants'
import { useSearchType } from '../search/use-search-type'

export const useSearchTypeDi = (
  searchType = SearchType.ACTERS
): typeof useSearchType => injectable(useSearchType, () => searchType)

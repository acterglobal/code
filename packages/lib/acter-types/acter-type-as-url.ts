import pluralize from 'pluralize'

import { ActerType } from '@schema'

/**
 * Make ActerType name url-friendly (lowercase, plural, and slugged)
 * @param acterType The ActerType
 */
export const acterTypeAsUrl = (acterType: ActerType): string =>
  pluralize(acterType.name.toLowerCase())

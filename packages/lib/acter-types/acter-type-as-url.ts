import pluralize from 'pluralize'

import { ActerType } from '@acter/schema/types'

/**
 * Make ActerType name url-friendly (lowercase, plural, and slugged)
 * @param acterType The ActerType
 */
export const acterTypeAsUrl = (acterType: ActerType): string =>
  pluralize(acterType.name.toLowerCase())

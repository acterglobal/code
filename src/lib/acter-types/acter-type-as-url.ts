import pluralize from 'pluralize'

import { ActerType } from '@generated/type-graphql'

/**
 * Make ActerType name url-friendly (lowercase, plural, and slugged)
 * @param acterType The ActerType
 */
export const acterTypeAsUrl = (acterType: ActerType) =>
  pluralize(acterType.name.toLowerCase())

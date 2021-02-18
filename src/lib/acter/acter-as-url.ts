import { acterTypeAsUrl } from 'src/lib/acter-types/acter-type-as-url'

import { Acter } from '@generated/type-graphql'

/**
 * Make ActerType name url-friendly (lowercase, plural, and slugged)
 * @param acterType The ActerType
 */
export const acterAsUrl = (acter: Acter) => {
  if (!acter.ActerType?.name) {
    throw 'ActerType must be provided'
  }
  const acterTypeUrl = acterTypeAsUrl(acter.ActerType)
  const acterSlugLower = acter.slug.toLowerCase()
  return `/${acterTypeUrl}/${acterSlugLower}`
}

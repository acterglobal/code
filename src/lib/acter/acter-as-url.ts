import { acterTypeAsUrl } from 'src/lib/acter-types/acter-type-as-url'

import { Acter } from '@schema'

/**
 * Make ActerType name url-friendly (lowercase, plural, and slugged)
 * @param acterType The ActerType
 */
export const acterAsUrl = (acter: Acter): string => {
  if (!acter.ActerType?.name) {
    throw 'ActerType must be provided'
  }
  const acterTypeUrl = acterTypeAsUrl(acter.ActerType)
  const acterSlugLower =
    acter.ActerType.name === 'activity'
      ? acter.Activity.Acter.slug.toLocaleLowerCase()
      : acter.slug.toLowerCase()
  return `/${acterTypeUrl}/${acterSlugLower}`
}

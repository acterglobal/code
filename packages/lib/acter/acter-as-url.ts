import { acterTypeAsUrl } from '@acter/lib/acter-types/acter-type-as-url'

import { Acter } from '@schema'

/**
 * Make ActerType name url-friendly (lowercase, plural, and slugged)
 * @param acter Acter for which we will build a URL
 * @param path any additional path & querystring
 * @returns
 */
export const acterAsUrl = (acter: Acter, ...path: string[]): string => {
  if (!acter.ActerType?.name) {
    throw 'ActerType must be provided'
  }
  const acterTypeUrl = acterTypeAsUrl(acter.ActerType)
  const acterSlugLower = acter.slug.toLowerCase()
  return ['', acterTypeUrl, acterSlugLower, ...path].join('/')
}

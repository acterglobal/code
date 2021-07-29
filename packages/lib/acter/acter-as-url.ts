import { acterTypeAsUrl } from '@acter/lib/acter-types/acter-type-as-url'

import { Acter } from '@acter/schema/types'

interface ActerAsUrlProps {
  /**
   * The Acter for which we are create a URL
   */
  acter: Acter
  /**
   * Extra path items for URL
   */
  extraPath?: string[]
  /**
   * Whether to include the base URL
   */
  includeBaseUrl?: boolean
}

/**
 * Make ActerType name url-friendly (lowercase, plural, and slugged)
 * @returns a url string
 */
export const acterAsUrl = ({
  acter,
  extraPath = [],
  includeBaseUrl = false,
}: ActerAsUrlProps): string => {
  if (!acter.ActerType?.name) {
    throw 'ActerType must be provided'
  }
  const baseURL = includeBaseUrl ? process.env.BASE_URL : ''
  const acterTypeUrl = acterTypeAsUrl(acter.ActerType)
  const acterSlugLower = acter.slug.toLowerCase()
  return [baseURL, acterTypeUrl, acterSlugLower, ...extraPath].join('/')
}

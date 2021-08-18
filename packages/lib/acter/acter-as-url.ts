import { acterTypeAsUrl } from '@acter/lib/acter-types/acter-type-as-url'

import { Acter } from '@acter/schema'

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
   * Query string to add
   */
  query?: { [key: string]: string }
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
  query = {},
  includeBaseUrl = false,
}: ActerAsUrlProps): string => {
  if (!acter.ActerType?.name) {
    throw 'ActerType must be provided'
  }
  const baseURL = includeBaseUrl ? process.env.BASE_URL : ''
  const acterTypeUrl = acterTypeAsUrl(acter.ActerType)
  const acterSlugLower = acter.slug.toLowerCase()
  const url = [baseURL, acterTypeUrl, acterSlugLower, ...extraPath].join('/')

  if (Object.keys(query).length > 0) {
    const queryString = Object.keys(query)
      .map((key) => `${key}=${query[key]}`)
      .join('&')
    return `${url}?${queryString}`
  }
  return url
}

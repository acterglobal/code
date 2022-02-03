import { acterTypeAsUrl } from '@acter/lib/acter-types/acter-type-as-url'
import { Acter, Activity } from '@acter/schema'

interface ActerAsUrlProps {
  /**
   * The Acter for which we are create a URL
   */
  acter: Acter
  /**
   * The Activity for which we are create a URL
   */
  activity?: Activity
  /**
   * Extra path items for URL
   */
  extraPath?: string | string[]
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
  activity,
  extraPath = [],
  query = {},
  includeBaseUrl = false,
}: ActerAsUrlProps): string => {
  if (!acter?.ActerType?.name) {
    throw 'ActerType must be provided'
  }

  const baseURL = includeBaseUrl ? process.env.NEXT_PUBLIC_BASE_URL : ''
  const acterTypeUrl = acterTypeAsUrl(acter.ActerType)
  const activityTypeUrl = activity?.Acter.ActerType.name
  const acterSlugLower = acter.slug.toLowerCase()
  const activityId = activity?.Acter.id

  const getUrl = (activity) => {
    if (activity) {
      const url = [
        baseURL,
        acterTypeUrl,
        acterSlugLower,
        activityTypeUrl,
        activityId,
        ...(Array.isArray(extraPath) ? extraPath : [extraPath]),
      ].join('/')
      return url
    }
    const url = [
      baseURL,
      acterTypeUrl,
      acterSlugLower,
      ...(Array.isArray(extraPath) ? extraPath : [extraPath]),
    ].join('/')
    return url
  }

  const url = getUrl(activity)

  if (Object.keys(query).length > 0) {
    const queryString = Object.keys(query)
      .map((key) => `${key}=${query[key]}`)
      .join('&')
    return `${url}?${queryString}`
  }
  return url
}

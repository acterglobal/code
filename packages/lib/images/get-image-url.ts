/**
 * Return image url if image exists otherwise returns default image url
 *
 * @param imageName acter's image name
 * @param imageType acter's avatar/banner image
 * @returns image url
 */
import { getImageBaseUrl } from './get-image-base-url'

type ImageUrlOptions = {
  suffix?: string
}

export const getImageUrl = (
  imageName: string,
  imageType?: 'avatar' | 'banner' | 'SDG',
  options?: ImageUrlOptions
): string => {
  const { suffix = '' } = options || {}

  const baseURL = getImageBaseUrl()
  const imageSuffix = process.env.NEXT_PUBLIC_DEFAULT_IMAGE_SUFFIX || ''
  // TODO: refactor this SDG.
  const imagePath =
    imageType === 'SDG'
      ? `/assets/SDG-logo.png`
      : imageName
      ? `/${imageName}`
      : `/assets/default-${imageType}${imageSuffix}.png`
  return [baseURL, imagePath, suffix].join('')
}

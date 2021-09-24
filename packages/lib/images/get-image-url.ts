/**
 * Return image url if image exists otherwise returns default image url
 *
 * @param imageName acter's image name
 * @param imageType acter's avatar/banner image
 * @returns image url
 */

type ImageUrlOptions = {
  suffix?: string
  includeBaseUrl: boolean
}

export const getImageUrl = (
  imageName: string,
  imageType: 'avatar' | 'banner',
  options?: ImageUrlOptions
): string => {
  const { suffix = '', includeBaseUrl = false } = options || {}
  const baseURL = includeBaseUrl ? process.env.NEXT_PUBLIC_IMAGE_LOADER_URL : ''
  const imageSuffix = process.env.NEXT_PUBLIC_DEFAULT_IMAGE_SUFFIX || ''
  const imagePath = imageName
    ? `/${imageName}`
    : `/assets/default-${imageType}${imageSuffix}.png`
  return [baseURL, imagePath, suffix].join('')
}

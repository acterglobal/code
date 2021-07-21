/**
 * Return image url if image exists otherwise returns default image url
 *
 * @param imageName acter's image name
 * @param imageType acter's avatar/banner image
 * @returns image url
 */

export const getImageUrl = (imageName: string, imageType: string): string =>
  imageName || `assets/default-${imageType}-2.png`

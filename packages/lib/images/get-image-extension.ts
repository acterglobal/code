/**
 * Gives image extension from image source
 * @param src image source
 * @returns image extension
 */
export const getImageExtension = (src: string): string => {
  const lastIndex = src.lastIndexOf('.')
  const extension = src.substring(lastIndex + 1)
  return extension
}

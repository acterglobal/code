/**
 *
 * @param url
 * @returns
 */
export const getUrl = (url: string): string => {
  if (!url) {
    return ''
  }

  if (url.match(/^https?:\/\//)) {
    return url
  }

  return `http://${url}`
}

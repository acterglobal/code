export const getImageBaseUrl = (): string => {
  if (process.env.NEXT_PUBLIC_IMAGE_LOADER_URL)
    return process.env.NEXT_PUBLIC_IMAGE_LOADER_URL
  if (process.env.STORYBOOK_IMAGE_LOADER_URL)
    return process.env.STORYBOOK_IMAGE_LOADER_URL
  throw new NoBaseUrlError()
}

export class NoBaseUrlError extends Error {
  constructor(message?: string) {
    super(message)
    Object.setPrototypeOf(this, NoBaseUrlError.prototype)
  }
}

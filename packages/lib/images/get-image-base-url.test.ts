import { getImageBaseUrl, NoBaseUrlError } from './get-image-base-url'

describe('getImageBaseUrl', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules()
    const {
      NEXT_PUBLIC_IMAGE_LOADER_URL: _1,
      STORYBOOK_IMAGE_LOADER_URL: _2,
      ...ENV_WITHOUT_BASE_URLS
    } = OLD_ENV
    process.env = { ...ENV_WITHOUT_BASE_URLS }
  })

  afterEach(() => {
    process.env = OLD_ENV
  })

  const nextBaseUrl = 'https://nextjs.org'
  const storybookBaseUrl = 'https://storybook.js.org'

  it('should use the NEXT_PUBLIC_IMAGE_LOADER_URL if it exists', () => {
    process.env.NEXT_PUBLIC_IMAGE_LOADER_URL = nextBaseUrl
    expect(getImageBaseUrl()).toBe(nextBaseUrl)
    process.env.STORYBOOK_IMAGE_LOADER_URL = storybookBaseUrl
    expect(getImageBaseUrl()).toBe(nextBaseUrl)
  })

  it('should should use STORYBOOK_IMAGE_LOADER_URL if only it exists', () => {
    process.env.STORYBOOK_IMAGE_LOADER_URL = storybookBaseUrl
    expect(getImageBaseUrl()).toBe(storybookBaseUrl)
  })

  it('should throw an error if neither environment variable exist', () => {
    expect(() => getImageBaseUrl()).toThrow(NoBaseUrlError)
  })
})

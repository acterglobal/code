import 'reflect-metadata'
import '@testing-library/jest-dom'

process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['acter-dev.imgix.net'],
    path: '/_next/image',
    loader: 'imgix',
  },
}

/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins')
const withGraphql = require('next-graphql-loader')
const { withSentryConfig } = require('@sentry/nextjs')
const transpileModules = require('next-transpile-modules')

const withTM = transpileModules([
  '@acter/components',
  '@acter/jobs',
  '@acter/lib',
  '@acter/schema',
])
const { i18n } = require('./next-i18next.config')

const disableSentrySourcemaps = process.env.SENTRY_BUILD_SOURCE_MAPS
  ? false
  : true

module.exports = withPlugins(
  [[withBundleAnalyzer], withSentryConfig, withGraphql, withTM],
  {
    i18n,
    images: {
      loader: 'imgix',
      path: process.env.NEXT_PUBLIC_IMAGE_LOADER_URL,
    },
    sentry: {
      disableServerWebpackPlugin: disableSentrySourcemaps,
      disableClientWebpackPlugin: disableSentrySourcemaps,
    },
    webpack: (config, options) => {
      config.plugins.push(
        new options.webpack.NormalModuleReplacementPlugin(
          /^type-graphql$/,
          (resource) => {
            resource.request = resource.request.replace(
              /type-graphql/,
              'type-graphql/dist/browser-shim.js'
            )
          }
        )
      )
      return config
    },
  }
)

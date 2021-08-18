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

module.exports = withPlugins(
  [[withBundleAnalyzer], withSentryConfig, withGraphql, withTM],
  {
    images: {
      loader: 'imgix',
      path: process.env.NEXT_PUBLIC_IMAGE_LOADER_URL,
    },
    sentry: {
      disableServerWebpackPlugin: true,
      disableClientWebpackPlugin: true,
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

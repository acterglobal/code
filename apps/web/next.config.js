// Add the following line at the top of the file:
// @ts-check

// Then for the config itself, import the types
// via '@type'-tag.

/**
 * @type {import('next/dist/server/config').NextConfig}
 **/

/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins')
const withGraphql = require('next-graphql-loader')
const { withSentryConfig } = require('@sentry/nextjs')
const transpileModules = require('next-transpile-modules')

const withTM = transpileModules([
  '@acter/api',
  '@acter/components',
  '@acter/jobs',
  '@acter/lib',
  '@acter/schema',
])
const { i18n } = require('./next-i18next.config')

const disableSentrySourcemaps = process.env.SENTRY_BUILD_SOURCE_MAPS
  ? false
  : true

const nextConfig = {
  module: {
    loaders: [
      {
        test: /plugin\.css$/,
        loaders: ['style-loader', 'css'],
      },
    ],
  },
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

module.exports = withPlugins(
  [[withBundleAnalyzer], withSentryConfig, withGraphql, withTM],
  nextConfig
)

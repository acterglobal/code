/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPlugins = require('next-compose-plugins')
const withGraphql = require('next-graphql-loader')
const transpileModules = require('next-transpile-modules')

const withTM = transpileModules([
  '@acter/components',
  '@acter/lib',
  '@acter/schema',
])

module.exports = withPlugins([[withBundleAnalyzer], withGraphql, withTM], {
  future: {
    webpack5: true,
  },
  images: {
    loader: 'imgix',
    path: process.env.NEXT_PUBLIC_IMAGE_LOADER_URL,
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
})

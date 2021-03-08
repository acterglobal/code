/* eslint-disable @typescript-eslint/no-var-requires*/
const withPlugins = require('next-compose-plugins')
const withGraphql = require('next-graphql-loader')

const {
  PHASE_PRODUCTION_BUILD,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants')

module.exports = withPlugins([withGraphql], {
  [PHASE_PRODUCTION_BUILD]: {
    webpack: (config, { webpack }) => {
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      return config
    },
  },
  [PHASE_PRODUCTION_BUILD + PHASE_PRODUCTION_SERVER]: {
    images: {
      loader: 'imgix',
      path: 'https://acter-prod.imgix.net',
    },
  },
  images: {
    loader: 'imgix',
    path: 'https://acter-dev.imgix.net',
  },
})

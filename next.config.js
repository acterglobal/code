/* eslint-disable @typescript-eslint/no-var-requires*/
require('dotenv').config()
const withPlugins = require('next-compose-plugins')
const withGraphql = require('next-graphql-loader')

const { PHASE_PRODUCTION_BUILD } = require('next/constants')

module.exports = withPlugins([withGraphql], {
  [PHASE_PRODUCTION_BUILD]: {
    webpack: (config, { webpack }) => {
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      return config
    },
  },
  images: {
    loader: 'imgix',
    path: process.env.IMAGE_LOADER_URL,
  },
})

/* eslint-disable @typescript-eslint/no-var-requires*/
const withPlugins = require('next-compose-plugins')
const withGraphql = require('next-graphql-loader')

const { PHASE_PRODUCTION_BUILD } = require('next/constants')

const path = process.env.IMAGE_LOADER_URL
console.log('***In next.config.js ', process.env.IMAGE_LOADER_URL)

module.exports = withPlugins([withGraphql], {
  [PHASE_PRODUCTION_BUILD]: {
    webpack: (config, { webpack }) => {
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
      return config
    },
  },
  images: {
    loader: 'imgix',
    path,
  },
})

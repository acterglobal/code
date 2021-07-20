const path = require('path')
const webpack = require('webpack')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-formik/register',
    'storybook-addon-next-router',
  ],

  webpackFinal: (config) => {
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /^type-graphql$/,
        (resource) => {
          resource.request = resource.request.replace(
            /type-graphql/,
            'type-graphql/dist/browser-shim.js'
          )
        }
      )
    )
    config.plugins.push(new NodePolyfillPlugin())
    return config
  },
}

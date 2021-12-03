const webpack = require('webpack')

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-formik/register',
    'storybook-addon-next-router',
    '@urql/storybook-addon',
    'storybook-addon-next-auth0',
  ],
  core: {
    builder: 'webpack5',
  },

  webpackFinal: async (config, { configType }) => {
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
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    return config
  },
}

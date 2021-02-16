const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],

  webpackFinal: (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    config.resolve.alias['next-auth/client'] = require.resolve(
      '../src/__mocks__/next-auth'
    )
    return config
  },
}

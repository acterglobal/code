module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-contexts',
  ],

  webpackFinal: (config) => {
    config.resolve.alias['next-auth/client'] = require.resolve(
      '../src/__mocks__/next-auth'
    )
    return config
  },
}

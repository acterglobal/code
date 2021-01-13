const withPlugins = require('next-compose-plugins')
const withGraphql = require('next-graphql-loader')

module.exports = withPlugins([withGraphql])

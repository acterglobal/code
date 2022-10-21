/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './apps/web',
})

const customJestConfig = {
  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '\\.(gql|graphql)$',
    '/.next/',
    '/packages/schema/generated',
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
  },

  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}

module.exports = createJestConfig(customJestConfig)

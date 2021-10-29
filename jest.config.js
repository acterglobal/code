module.exports = {
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',

  // A set of global variables that need to be available in all test environments
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json',
    },
  },

  // An array of regexp pattern strings used to skip coverage collection
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '\\.(gql|graphql)$',
    '/.next/',
    '/packages/schema/generated',
  ],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    // ...pathsToModuleNameMapper(compilerOptions.paths),
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^react(.*)$': '<rootDir>/node_modules/react$1',
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['./jest.setup.js'],

  // A map from regular expressions to paths to transformers
  transform: {
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '\\.[jt]sx?$': 'babel-jest',
  },
}

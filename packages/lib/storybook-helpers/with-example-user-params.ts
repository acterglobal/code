import { Parameters } from '@storybook/csf'

import { ExampleUser } from '@acter/schema/fixtures'

export const withExampleUserParams = (user = ExampleUser): Parameters => ({
  initialUser: {
    isLoading: false,
    user: {
      email: user.email,
    },
  },
  urql: () => ({
    data: {
      user: ExampleUser,
    },
  }),
})

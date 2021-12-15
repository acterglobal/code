import {
  ExampleActer,
  ExampleOrganisationActer,
  ExampleUser,
} from '@acter/schema/fixtures'

const user = {
  ...ExampleUser,
  Acter: {
    ...ExampleActer,
    Following: [
      { Following: ExampleActer },
      { Following: ExampleOrganisationActer },
    ],
  },
}

export const initialUser = {
  isLoading: false,
  user: {
    email: user.email,
  },
}

export const loggedInParameters = {
  initialUser,
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  urql: (): Record<string, any> => ({
    data: {
      user: user,
    },
  }),
}

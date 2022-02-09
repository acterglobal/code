import { injectable } from 'react-magnetic-di/macro'

import { ExampleUser, ExampleUserActer } from '@acter/lib/fixtures'
import { UseUserQueryResult, useUser } from '@acter/lib/user/use-user'

const defaultUser = {
  ...ExampleUser,
  Acter: ExampleUserActer,
}

/**
 * Create a DI mock for the useUser hook
 * @param user An optional User fixture, will otherwise use ExampleUser
 * @returns A mocked useUser to be used by `react-magnetic-di/macro`
 */
export const useUserDi = (user = defaultUser): typeof useUser =>
  injectable(
    useUser,
    () =>
      (({
        user,
        loading: false,
      } as unknown) as UseUserQueryResult)
  )

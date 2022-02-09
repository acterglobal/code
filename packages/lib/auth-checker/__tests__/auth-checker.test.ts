import { ResolverData } from 'type-graphql'

import { authChecker } from '@acter/lib/auth-checker'
import {
  ExampleActer,
  ExampleActerConnection,
  ExampleUser,
} from '@acter/lib/fixtures'
import { ActerGraphQLContext } from '@acter/lib/types/graphql-api'
import { ActerConnectionRole } from '@acter/schema'

describe('auth-checker', () => {
  const options = ({
    args: {},
    context: {
      session: {},
      prisma: {
        acterConnection: {
          findFirst: jest.fn().mockReturnValue({ ...ExampleActerConnection }),
        },
      },
    },
  } as unknown) as ResolverData<ActerGraphQLContext>

  it('should return false if no session user is available', async () => {
    const result = await authChecker(options, [])
    expect(result).toBe(false)

    const result1 = await authChecker(options, [ActerConnectionRole.MEMBER])
    expect(result1).toBe(false)
  })

  it('should return false if given roles are other than ADMIN', async () => {
    options.context.session.user = { ...ExampleUser }

    const result = await authChecker(options, [ActerConnectionRole.MEMBER])
    expect(result).toBe(false)

    const result1 = await authChecker(options, [ActerConnectionRole.PENDING])
    expect(result1).toBe(false)
  })

  it('should return false for ADMIN role and if no acterId (Acter on which user is admin) passed in args', async () => {
    options.context.session.user = { ...ExampleUser }
    const roles = [ActerConnectionRole.ADMIN]

    const authCheckerFn = await authChecker(options, roles)
    expect(authCheckerFn).toBe(false)
  })

  it('should return true for updating user profile', async () => {
    options.context.session.user = { ...ExampleUser, Acter: ExampleActer }
    options.args.acterId = ExampleActer.id

    const authCheckerFn = await authChecker(options, [
      ActerConnectionRole.ADMIN,
    ])
    expect(authCheckerFn).toBe(true)
  })

  it('should return true for ADMIN role', async () => {
    options.context.session.user = { ...ExampleUser, Acter: ExampleActer }
    options.args.acterId = '13243laa3223kfj3'

    const authCheckerFn = await authChecker(options, [
      ActerConnectionRole.ADMIN,
    ])
    expect(authCheckerFn).toBe(true)
  })
})

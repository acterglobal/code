import { ResolverData } from 'type-graphql'

import { ActerGraphQLContext } from '@acter/lib/contexts/graphql-api'
import { ActerConnectionRole } from '@acter/schema'
import { authChecker } from '@acter/schema/auth-checker'
import {
  ExampleActer,
  ExampleActerConnection,
  ExampleUser,
} from '@acter/schema/fixtures'

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

  const roles = []

  it('should return false if no session user is available', async () => {
    const result = await authChecker(options, roles)
    expect(result).toBe(false)

    roles.push(ActerConnectionRole.MEMBER)
    const result1 = await authChecker(options, roles)
    expect(result1).toBe(false)
  })

  it('should return false if given roles are other than ADMIN', async () => {
    options.context.session.user = { ...ExampleUser }

    roles.push(ActerConnectionRole.MEMBER)
    const result = await authChecker(options, roles)
    expect(result).toBe(false)

    roles.push(ActerConnectionRole.PENDING)
    const result1 = await authChecker(options, roles)
    expect(result1).toBe(false)

    roles.push(1234)
    const result2 = await authChecker(options, roles)
    expect(result2).toBe(false)
  })

  it('should return false for ADMIN role and if no acterId (Acter on which user is admin) passed in args', async () => {
    options.context.session.user = { ...ExampleUser }
    roles.push(ActerConnectionRole.ADMIN)

    const authCheckerFn = await authChecker(options, roles)
    expect(authCheckerFn).toBe(false)
  })

  it('should return true for ADMIN role', async () => {
    options.context.session.user = { ...ExampleUser, Acter: ExampleActer }
    options.args.acterId = '13243laa3223kfj3'
    roles.push(ActerConnectionRole.ADMIN)

    const authCheckerFn = await authChecker(options, roles)
    expect(authCheckerFn).toBe(true)
  })
})

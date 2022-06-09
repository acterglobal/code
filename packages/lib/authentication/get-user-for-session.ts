import { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from '@auth0/nextjs-auth0'

import { User } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

import { getLogger } from '../logger'

const l = getLogger('getUserForSession')

export class UserNotLoggedIn extends Error {}
export class UserNotFound extends Error {}

export const getUserForSession = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<User> => {
  const session = getSession(req, res)

  if (!session?.user) {
    l.debug({ session }, 'no user for session')
    res
      .redirect(
        `${process.env.AUTH0_BASE_URL}/api/auth/login?returnTo=${req.url}`
      )
      .end()
    throw new UserNotLoggedIn()
  }

  const user = await prisma.user.findFirst({
    include: {
      Acter: true,
    },
    where: {
      email: session.user.email,
    },
  })

  if (!user) {
    l.debug({ session, user }, 'no user found')
    res.redirect('/401').end()
    throw new UserNotFound()
  }

  return user
}

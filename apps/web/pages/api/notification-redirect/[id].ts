import { NextApiHandler } from 'next'

import { withSentry } from '@sentry/nextjs'

import { User } from '@acter/../packages/schema'
import {
  getUserForSession,
  UserNotLoggedIn,
  UserNotFound,
} from '@acter/lib/authentication/get-user-for-session'
import { getLogger } from '@acter/lib/logger'
import { prisma } from '@acter/schema/prisma'

const l = getLogger('notificationRedirect')

const notificationRedirect: NextApiHandler = async (req, res) => {
  let user: User
  try {
    user = await getUserForSession(req, res)
  } catch (e) {
    if (e instanceof UserNotLoggedIn)
      return l.debug('user not logged in, redirecting to login')
    if (e instanceof UserNotFound)
      return l.debug('user not found, redirecting to 401')
    throw e
  }

  const notification = await prisma.notification.findFirst({
    where: {
      id: req.query.id as string,
      sendTo: user.email,
    },
  })

  if (!notification) return res.redirect('/404').end()

  await prisma.notification.update({
    data: { viewedAt: new Date() },
    where: { id: notification.id },
  })

  res.redirect(notification.url).end()
}

export default withSentry(notificationRedirect)

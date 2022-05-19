import { NextApiHandler } from 'next'

import { withSentry } from '@sentry/nextjs'

import { getUserForSession } from '@acter/lib/authentication/get-user-for-session'
import { prisma } from '@acter/schema/prisma'

const notificationRedirect: NextApiHandler = async (req, res) => {
  const user = await getUserForSession(req, res)

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

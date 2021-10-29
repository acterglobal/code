import type { NextApiRequest, NextApiResponse } from 'next'

import { getSession } from '@auth0/nextjs-auth0'
import { withSentry } from '@sentry/nextjs'

import { inviteEmailCreateQueue } from '@acter/jobs'
import { prisma } from '@acter/schema/prisma'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const user = getSession(req, res)?.user

  if (!user) {
    return res.status(401).send('Not authorized.')
  }

  if (!req.query.id) {
    return res.status(400).send('Invitation failed. Please try again later.')
  }

  try {
    const invite = await prisma.invite.findFirst({
      where: { id: req.query.id as string },
    })

    inviteEmailCreateQueue.add(
      `create-invite-email-${invite.email}`,
      { ...invite, senderName: user.Acter.name },
      { removeOnComplete: true }
    )
  } catch (error) {
    console.error(error)
    return res.status(400).send('Invitation failed. Please try again later.')
  }

  res.send('Invitation sent')
}

export default withSentry(handler)

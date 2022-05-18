import { NextApiHandler } from 'next'

import { getSession } from '@auth0/nextjs-auth0'
import { withSentry } from '@sentry/nextjs'

import { getLogger } from '@acter/../packages/lib/logger'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { createActerConnection } from '@acter/lib/api/create-acter-connection'
import { prisma } from '@acter/schema/prisma'

const l = getLogger('acceptInviteHandler')

const acceptInviteHandler: NextApiHandler = async (req, res) => {
  const t = l.startTimer()
  const { id } = req.query

  const session = getSession(req, res)

  if (!session?.user) {
    t.done('Not logged in')
    res.redirect(`/api/auth/login?returnTo=${req.url}`)
    return
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
    t.done({
      sessionUser: session.user,
      user,
      msg: 'No user found for session',
      level: 'warn',
    })
    res.redirect('/404')
    return
  }

  const invite = await prisma.invite.findFirst({
    where: {
      id: id as string,
    },
  })

  if (!invite) {
    t.done({ inviteId: id, msg: 'No invite found for id', level: 'warn' })
    res.redirect('/404')
    return
  }
  if (invite?.expiredAt) {
    res.redirect('/invites/expired')
    return
  }

  const acter = await prisma.acter.findFirst({
    include: {
      ActerType: true,
    },
    where: {
      id: invite.onActerId,
    },
  })

  if (!acter) {
    t.done({
      invite,
      user: session.user,
      msg: 'No Acter found for invite',
    })
    res.redirect('/404')
    return
  }

  const connection = await createActerConnection({
    prisma,
    followerActerId: user.Acter.id,
    followingActerId: acter.id,
    createdByUserId: user.id,
  })

  if (!connection) {
    t.done({
      invite,
      acter,
      msg: 'Could not create connection for Invite',
      level: 'error',
    })
    res.redirect('/500')
    return
  }

  const inviteUpdate = await prisma.invite.update({
    data: {
      acceptedAt: new Date(),
    },
    where: {
      id: invite.id,
    },
  })

  if (!inviteUpdate) {
    t.done({
      invite,
      acter,
      connection,
      msg: 'Could not update Invite',
      level: 'error',
    })
  }

  t.done({
    inviteUpdate,
    acter,
    connection,
    msg: 'Invite accept complete',
  })
  res.redirect(acterAsUrl({ acter }))
  return
}

export default withSentry(acceptInviteHandler)

import type { NextApiRequest, NextApiResponse } from 'next'

import { withSentry } from '@sentry/nextjs'

import { createInviteNotification } from '@acter/../services/jobs/invite-notification/create-invites'
import {
  ActivityPick,
  createActivityFollowerNotifications,
} from '@acter/jobs/activity-notifications'
import { InviteEmailCreate } from '@acter/jobs/invite-notification/types'
import {
  createNewMemberNotifications,
  NewMemberJoinNotification,
} from '@acter/jobs/new-member-notifications'
import {
  createPostNotifications,
  PostJobVariables,
} from '@acter/jobs/post-notifications'
import { NotificationQueueType } from '@acter/lib/constants'
import { logger } from '@acter/lib/logger'

type NotificationTypeMapItem<T> = {
  checks: (body: T) => boolean
  fn: (body: T) => void
}

type MapItem =
  | ActivityPick
  | InviteEmailCreate
  | NewMemberJoinNotification
  | PostJobVariables

const notificationTypeMap: Record<
  NotificationQueueType,
  NotificationTypeMapItem<MapItem>
> = {
  [NotificationQueueType.NEW_ACTIVITY]: {
    checks: (body: ActivityPick) => !!body.acterId,
    fn: createActivityFollowerNotifications,
  },
  [NotificationQueueType.NEW_INVITE]: {
    checks: (body: InviteEmailCreate) =>
      !!body.onActerId && !!body.email && !!body.createdByUserId,
    fn: createInviteNotification,
  },
  [NotificationQueueType.NEW_MEMBER]: {
    checks: (body: NewMemberJoinNotification) => !!body?.Following,
    fn: createNewMemberNotifications,
  },
  [NotificationQueueType.NEW_POST]: {
    checks: (body: PostJobVariables) => !!body.id,
    fn: createPostNotifications,
  },
}

const l = logger.child({ label: 'notifyHandler' })

const notifyHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    l.debug('Received notify job', {
      type: req.query.type,
      body: req.body,
    })
    const worker = notificationTypeMap[req.query.type as NotificationQueueType]
    if (!worker) return res.status(400).send('Bad request')
    if (!worker.checks(req.body)) return res.status(422).send('Data missing')
    await worker.fn(req.body)
    return res.status(200).send('ok')
  } catch (e) {
    l.error(e)
    res.status(400).send(e)
    throw e
  }
}

export default withSentry(notifyHandler)

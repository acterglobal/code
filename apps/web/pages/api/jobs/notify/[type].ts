import type { NextApiRequest, NextApiResponse } from 'next'

import {
  ActivityPick,
  createActivityFollowerNotifications,
} from '@acter/jobs/activity-notifications'
import {
  createNewMemberNotifications,
  NewMemberJoinNotification,
} from '@acter/jobs/new-member-notifications'
import {
  createPostNotifications,
  PostJobVariables,
} from '@acter/jobs/post-notifications'
import { NotificationQueueType } from '@acter/lib/constants'

type NotificationTypeMapItem<T> = {
  checks: (body: T) => boolean
  fn: (body: T) => void
}

type MapItem = ActivityPick | NewMemberJoinNotification | PostJobVariables

const notificationTypeMap: Record<
  NotificationQueueType,
  NotificationTypeMapItem<MapItem>
> = {
  [NotificationQueueType.NEW_ACTIVITY]: {
    checks: (body: ActivityPick) => !!body.acterId,
    fn: createActivityFollowerNotifications,
  },
  [NotificationQueueType.NEW_MEMBER]: {
    checks: (body: NewMemberJoinNotification) => {
      console.log(body)
      return !!body?.Following
    },
    fn: createNewMemberNotifications,
  },
  [NotificationQueueType.NEW_POST]: {
    checks: (body: PostJobVariables) => !!body.id,
    fn: createPostNotifications,
  },
}

export default (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    const worker = notificationTypeMap[req.query.type as NotificationQueueType]
    if (!worker) return res.status(400).send('Bad request')
    if (!worker.checks(req.body)) return res.status(422).send('Data missing')
    worker.fn(req.body)
  } catch (e) {
    console.error(e)
    return res.status(400).send(e)
  }

  res.status(200).send('ok')
}

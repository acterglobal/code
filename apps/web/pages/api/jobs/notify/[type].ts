import type { NextApiRequest, NextApiResponse } from 'next'

import { createActivityFollowerNotifications } from '@acter/jobs/activity-notifications'
import { createPostNotifications } from '@acter/jobs/post-notifications'
import { NotificationQueueType } from '@acter/lib/constants'

export default (req: NextApiRequest, res: NextApiResponse): void => {
  try {
    switch (req.query.type) {
      case NotificationQueueType.NEW_ACTIVITY:
        if (!req.body?.acterId)
          return res.status(422).send('Activity Acter ID missing')
        createActivityFollowerNotifications({
          activity: req.body,
        })
        break
      case NotificationQueueType.NEW_POST:
        if (!req.body?.id) return res.status(422).send('Post ID missing')
        createPostNotifications({
          post: req.body,
        })
        break
      default:
        return res.status(400).send('Bad request')
    }
  } catch (e) {
    console.error(e)
    return res.status(400).send(e)
  }

  res.status(200).send('ok')
}

import axios from 'axios'
import { MiddlewareFn } from 'type-graphql'

import { ActivityPick } from '@acter/jobs/activity-notifications'

export const QueueNewActivityNotification: MiddlewareFn = async (_, next) => {
  const activity: ActivityPick = await next()

  console.debug('Adding Activity notification to queue ', activity)
  axios({
    method: 'POST',
    url: `${process.env.BASE_URL}/api/jobs/activity-notify`,
    data: {
      activity,
    },
  })
}

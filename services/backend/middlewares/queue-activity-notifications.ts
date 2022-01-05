import { MiddlewareFn } from 'type-graphql'

import { activityNotificationsQueue, ActivityPick } from '@acter/jobs'

export const QueueNewActivityNotification: MiddlewareFn = async (_, next) => {
  const activity: ActivityPick = await next()

  console.debug('Adding Activity notification to queue ', activity)

  activityNotificationsQueue.add(
    `new-activity-${activity.id}`,
    { activity },
    { removeOnComplete: true }
  )
}

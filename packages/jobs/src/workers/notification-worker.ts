import { Worker, Job } from 'bullmq'
import prisma from '@acter/lib/prisma'

import {
  ActerTypes,
  NOTIFICATIONS_QUEUE,
  NotificationJobState,
} from '@acter/lib/constants'
import { connect } from 'http2'

export const notificationWorker = new Worker(
  NOTIFICATIONS_QUEUE,
  async (job: Job) => {
    console.log('Processing job')
    job.updateProgress({ state: NotificationJobState.STARTED })
    const post = await prisma.post.findFirst({
      include: {
        Acter: {
          include: {
            Followers: {
              include: {
                Follower: {
                  include: {
                    ActerType: true,
                    User: true,
                  },
                },
              },
            },
          },
        },
      },
      where: { id: job.data.id },
    })
    const notify = post.Acter.Followers.filter((connection) => {
      // Only notify users
      if (connection.Follower.ActerType.name !== ActerTypes.USER) return false
      // Don't notify the author
      if (connection.Follower.id === post.authorId) return false

      return true
    }).map((connection) => connection.Follower.User.email)
    console.log('notifications to: ', notify)
    return
  }
)

import { Worker, Job } from 'bullmq'
import prisma from '@acter/lib/prisma'
import {
  ActerNotificationSettings,
  NotificationType,
} from '@acter/schema/types'

import {
  ActerTypes,
  NOTIFICATIONS_QUEUE,
  NotificationJobState,
} from '@acter/lib/constants'

export const notificationWorker = new Worker(
  NOTIFICATIONS_QUEUE,
  async (job: Job) => {
    console.log('Processing job: ', job.data)
    job.updateProgress({ state: NotificationJobState.STARTED })

    // First we want to find all the followers for the parent Acter
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
      where: {
        id: job.data.id,
      },
    })

    const notify = post.Acter.Followers.filter(({ Follower }) => {
      if (
        Follower.ActerType.name !== ActerTypes.USER ||
        Follower.id === post.authorId
      ) {
        return false
      }
      return true
    })

    const notifications = await Promise.all(
      notify.map(async ({ Follower }) => {
        console.log('Trying to create notification for ', Follower)
        return await prisma.notification.create({
          data: {
            type: NotificationType.NEW_POST,
            url: '',
            ToActer: { connect: { id: Follower.id } },
            OnActer: { connect: { id: post.Acter.id } },
            // // Only set the sendTo for acters who want it
            sentTo:
              Follower.acterNotifySetting ===
                ActerNotificationSettings.ALL_ACTIVITY && Follower.User.email,
          },
        })
      })
    )

    console.log('Notifications create complete', notifications)

    job.updateProgress({ state: NotificationJobState.FINISHED })
    return 'Notification job complete'
  },
  { concurrency: 50 }
)

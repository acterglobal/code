import 'reflect-metadata'

import { POST_NOTIFICATIONS_QUEUE } from '@acter/lib/constants'
import { createPostEmailNotification } from '@acter/lib/post/email'
import { PostNotificationCreate } from './types'
import { createNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { prisma } from '@acter/schema/prisma'

export const postNotificationsCreateWorker = createNotificationWorker<PostNotificationCreate>(
  {
    queue: POST_NOTIFICATIONS_QUEUE,
    getJobData: async (job) => {
      const post = await prisma.post.findFirst({
        include: {
          Acter: true,
          Author: true,
        },
        where: {
          id: job.data.post.id,
        },
      })
      return { post }
    },
    getFollowing: async ({ post }) => {
      return await prisma.acter.findFirst({
        select: {
          id: true,
          name: true,
          slug: true,
          ActerType: true,
        },
        where: {
          id: post.acterId,
        },
      })
    },
    getNotificationEmail: ({ data: { post }, notification }) =>
      createPostEmailNotification({
        post,
        notification,
      }),
    getNotificationEmailSubject: ({ notification }) =>
      `New post on ${notification.OnActer.name} via Acter`,
  }
)

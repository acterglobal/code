import 'reflect-metadata'

import { PostNotificationCreate } from './types'
import slugify from 'slugify'

import { ActerTypes, POST_NOTIFICATIONS_QUEUE } from '@acter/lib/constants'
import { createNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { createPostEmailNotification } from '@acter/lib/post/email'
import { NotificationType, Post } from '@acter/schema'
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
        include: {
          ActerType: true,
          Parent: {
            include: {
              ActerType: true,
            },
          },
        },
        where: {
          id: post.acterId,
        },
      })
    },
    getFollowersWhere: ({ post }) => ({
      Follower: {
        id: {
          not: post.Author.id,
        },
      },
    }),
    getNotificationEmail: ({ data: { post }, notification }) =>
      createPostEmailNotification({
        post,
        notification,
      }),
    getNotificationEmailSubject: ({ notification }) =>
      `New post on ${notification.OnActer.name} via Acter`,
    getPost: ({ post }) => post as Post,
    type: NotificationType.NEW_POST,
    getNotificationUrlPath: (postId, following) =>
      following.ActerType.name === ActerTypes.ACTIVITY
        ? `activities?activity=${slugify(following.name)}&post=${postId}`
        : `forum/${postId}`,
  }
)

import 'reflect-metadata'

import slugify from 'slugify'

import { ActerTypes } from '@acter/lib/constants'
import { createNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { NotificationType, Post } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

import { createOnePostMentionEmailNotification } from './template'
import { PostMentionJobVariables, PostMentionJobData } from './types'

export const createOnePostMentionNotifications = createNotificationWorker<
  PostMentionJobVariables,
  PostMentionJobData
>({
  getJobData: async (job) => {
    const postMention = await prisma.postMention.findFirst({
      where: {
        id: job.id,
      },
    })
    const post = await prisma.post.findFirst({
      include: {
        Acter: true,
        Author: true,
      },
      where: {
        id: postMention.postId,
      },
    })
    return { post, postMention }
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
        id: post.Acter.id,
      },
    })
  },
  getFollowersWhere: ({ postMention }) => ({
    Follower: {
      id: postMention.acterId,
    },
  }),
  getNotificationEmail: ({ data: { post }, notification }) =>
    createOnePostMentionEmailNotification({
      post,
      notification,
    }),
  getNotificationEmailSubject: ({ notification }) =>
    `New mention on post on ${notification.OnActer.name} via Acter`,
  getPost: ({ post }) => post as Post,
  type: NotificationType.NEW_MENTION,
  getNotificationUrlPath: (postId, following) =>
    following.ActerType.name === ActerTypes.ACTIVITY
      ? `activities?activity=${slugify(following.name)}&post=${postId}`
      : `forum/${postId}`,
})

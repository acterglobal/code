import 'reflect-metadata'

import slugify from 'slugify'

import { ActerTypes } from '@acter/lib/constants'
import {
  getUsersToNotify,
  createOneNotificationWorker,
} from '@acter/lib/notification'
import { NotificationType, Post } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

import { createOnePostEmailNotification } from './template'
import { PostJobVariables, PostJobData } from './types'

export const createOnePostNotifications = createOneNotificationWorker<
  PostJobVariables,
  PostJobData & { notifyUsers: string[] }
>({
  getJobData: async (job) => {
    const post = await prisma.post.findFirst({
      include: {
        Acter: true,
        Author: true,
      },
      where: {
        id: job.id,
      },
    })

    let notifyUsers = []

    // We have a comment, not a post
    if (post.parentId !== null) {
      notifyUsers = await getUsersToNotify(post.parentId, post.authorId)
    }

    return { post, notifyUsers }
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
  getFollowersWhere: ({ post, notifyUsers }) => ({
    Follower: {
      id: {
        not: post.Author.id,
        in: notifyUsers,
      },
    },
  }),
  getNotificationEmail: ({ data: { post }, notification }) =>
    createOnePostEmailNotification({
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
})

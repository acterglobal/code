import 'reflect-metadata'

import { PostNotificationCreate } from './types'
import slugify from 'slugify'

import { ActerTypes, POST_NOTIFICATIONS_QUEUE } from '@acter/lib/constants'
import { createNotificationWorker } from '@acter/lib/notification/create-notification-worker'
import { createPostEmailNotification } from '@acter/lib/post/email'
import { Acter, NotificationType, Post, User } from '@acter/schema'
import { prisma, Prisma } from '@acter/schema/prisma'

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
    getFollowers: async ({ post }) => {
      const Author: Prisma.ActerArgs = {
        select: {
          id: true,
          name: true,
          User: {
            select: {
              id: true,
              email: true,
            },
          },
        },
      }
      const Comments: Prisma.PostFindManyArgs = {
        select: {
          Author,
        },
      }
      const thread = await prisma.post.findFirst({
        select: {
          id: true,
          Author,
          Parent: {
            select: {
              Author,
              Comments,
            },
          },
          Comments,
        },
        where: { id: post.id },
      })

      type ActerMap = Record<string, Acter>
      type UserPartial = Partial<User>
      type ActerPartial = Partial<Acter> & { User: UserPartial }
      type PostPartial = Partial<Post> & {
        Author: ActerPartial
        Parent: PostPartial
        Comments: PostPartial[]
      }
      const thisPostAuthor = post.Author
      const flattenPostAuthors = (post: PostPartial): Acter[] => {
        if (post.Parent) return flattenPostAuthors(post.Parent)

        const commentAuthors = post.Comments.reduce<ActerMap>(
          (memo, comment) => ({
            ...memo,
            [comment.Author.id]: comment.Author,
          }),
          { [post.Author.id]: post.Author }
        )

        return Object.values(commentAuthors).filter(
          (author) => author.id !== thisPostAuthor.id
        )
      }

      return flattenPostAuthors(thread as PostPartial)
    },
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

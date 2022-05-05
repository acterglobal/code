import 'reflect-metadata'

import { DATE_FORMAT_LONG } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { sendEmail } from '@acter/lib/email'
import { logger } from '@acter/lib/logger'
import { getNotificationUrl } from '@acter/lib/notification/get-notification-url'
import { NotificationEmail } from '@acter/lib/notification/send-notification-email'
import { NotificationType } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

import { createDailyDigestEmail } from './template'
import { DailyDigest, NotificationByActerMap } from './types'

export const createDailyDigest = async ({
  acter,
  afterDateTime,
}: DailyDigest): Promise<void> => {
  const formattedAfterDateTime = parseAndFormat({
    dateString: afterDateTime,
    formatString: DATE_FORMAT_LONG,
  })

  const notifications = await prisma.notification.findMany({
    include: {
      OnActer: {
        include: {
          ActerType: true,
        },
      },
      Activity: {
        include: {
          Acter: {
            include: {
              ActerType: true,
            },
          },
          ActivityType: true,
          createdByUser: {
            include: {
              Acter: true,
            },
          },
        },
      },
      Post: {
        include: {
          Acter: true,
          Author: true,
        },
      },
    },
    where: {
      toActerId: acter.id,
      sentAt: null,
      type: {
        in: [NotificationType.NEW_ACTIVITY, NotificationType.NEW_POST],
      },
    },
  })

  if (notifications.length === 0) {
    logger.log('No notifications, exiting')
    return
  }

  const notificationsByActer: NotificationByActerMap = notifications.reduce(
    (memo, notification) => {
      const { OnActer, Activity, Post } = notification
      const notificationUrl = getNotificationUrl(notification)
      const activities = Activity ? [{ ...Activity, notificationUrl }] : []
      const posts = Post ? [{ ...Post, notificationUrl }] : []

      if (activities.length === 0 && posts.length === 0) return memo

      return {
        ...memo,
        [OnActer.id]: {
          acter: OnActer,
          activities: [...(memo[OnActer.id]?.activities || []), ...activities],
          posts: [...(memo[OnActer.id]?.posts || []), ...posts],
        },
      }
    },
    {} as NotificationByActerMap
  )

  const { html, text } = createDailyDigestEmail({
    notificationsByActer: { acters: Object.values(notificationsByActer) },
  })

  const email: NotificationEmail = {
    to: acter.User.email,
    subject: `Acter Daily Digest for ${formattedAfterDateTime}`,
    html,
    text,
    notifications: notifications.map(({ id }) => ({ id })),
  }
  sendEmail(email)
}

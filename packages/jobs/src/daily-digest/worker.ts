import 'reflect-metadata'

import { DailyDigest, NotificationByActerMap } from './types'
import { Job } from 'bullmq'
import { getTime } from 'date-fns'

import { emailSendQueue, NotificationEmail } from '@acter/jobs'
import { createWorker } from '@acter/lib/bullmq'
import { DAILY_DIGEST_CREATE, DATE_FORMAT_LONG } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { parseDateOrString } from '@acter/lib/datetime/parse-date-or-string'
import { getNotificationUrl } from '@acter/lib/notification/get-notification-url'
import { createDailyDigestEmail } from '@acter/lib/user/email/daily-digest'
import { NotificationType } from '@acter/schema'
import { prisma } from '@acter/schema/prisma'

export const dailyDigestWorker = createWorker(
  DAILY_DIGEST_CREATE,
  async (job: Job<DailyDigest>) => {
    const {
      data: { acter, afterDateTime },
    } = job
    const formattedAfterDateTime = parseAndFormat(
      afterDateTime,
      DATE_FORMAT_LONG
    )

    const notifications = await prisma.notification.findMany({
      include: {
        OnActer: {
          include: {
            ActerType: true,
          },
        },
        Activity: {
          include: {
            Acter: true,
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
      console.log('No notifications, exiting')
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
            activities: [
              ...(memo[OnActer.id]?.activities || []),
              ...activities,
            ],
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
    emailSendQueue.add(
      `email-digest-${acter.id}-${getTime(parseDateOrString(afterDateTime))}`,
      email,
      {
        removeOnComplete: true,
      }
    )
  }
)

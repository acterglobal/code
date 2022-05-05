import { logger } from '@acter/lib/logger'
import { prisma } from '@acter/schema/prisma'

import { sendEmail, Email } from '../email/send-email'

interface Notification {
  id: string
}

export interface NotificationEmail extends Email {
  /**
   * Notifications to close out on send success
   */
  notifications?: Notification | Notification[]
}

export const sendNotificationEmail = async (
  job: NotificationEmail
): Promise<void> => {
  try {
    const res = await sendEmail(job)
    logger.debug('[sendNotificationEmail] Email sent', {
      to: job.to,
      subject: job.subject,
      res,
    })

    const sentAt = new Date()
    if (job.notifications) {
      const notifications = Array.isArray(job.notifications)
        ? job.notifications
        : [job.notifications]
      const notificationIds = notifications.map(({ id }) => id)
      const notification = await prisma.notification.updateMany({
        data: {
          sentAt,
        },
        where: {
          id: {
            in: notificationIds,
          },
        },
      })
      logger.debug('[sendNotificationEmail] Notification(s) updated', {
        notification,
      })
    }
  } catch (err) {
    logger.error('[sendNotificationEmail] Error sending message', {
      notifications: job.notifications,
      err,
    })
  }
}

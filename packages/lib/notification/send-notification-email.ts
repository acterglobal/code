import { getLogger } from '@acter/lib/logger'
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

const l = getLogger('sendNotificationEmail')

export const sendNotificationEmail = async (
  job: NotificationEmail
): Promise<void> => {
  try {
    const { messageId, response } = await sendEmail(job)
    l.info('Email sent', {
      subject: job.subject,
      messageId,
      response,
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
      l.debug('Notification(s) updated', {
        notification,
      })
    }
  } catch (err) {
    l.error('Error sending message', {
      notifications: job.notifications,
      err,
    })
  }
}

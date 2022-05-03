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
    console.debug('Notification email sent', {
      to: job.to,
      subject: job.subject,
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
      return {
        ...res,
        notification,
      }
    }
    return
  } catch (err) {
    console.error('Error sending message', job, err)
  }
}

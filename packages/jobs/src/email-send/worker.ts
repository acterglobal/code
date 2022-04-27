import { sendEmail } from '@acter/lib/email'
import { prisma } from '@acter/schema/prisma'

import { NotificationEmail } from './types'

export const emailSendWorker = async (
  job: NotificationEmail
): Promise<void> => {
  try {
    const res = await sendEmail(job)

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

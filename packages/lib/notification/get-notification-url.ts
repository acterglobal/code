import { Notification } from '@acter/schema'

export const getNotificationUrl = (notification: Notification): string =>
  [process.env.BASE_URL, 'notifications', notification.id].join('/')

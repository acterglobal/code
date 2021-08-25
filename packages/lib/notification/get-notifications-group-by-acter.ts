import { Notification } from '@acter/schema'

export type NotificationsData = Record<string, Array<Notification>>

/**
 * Gives list of notifications group by acter
 * @param notifications list of notifications from DB
 * @returns notifications list after group by acter
 */
export const getNotificationsGroupByActer = (
  notifications: Notification[]
): NotificationsData =>
  notifications.reduce((result, notification) => {
    result[notification.onActerId] = [
      ...(result[notification.onActerId] || []),
      notification,
    ]
    return result
  }, {})

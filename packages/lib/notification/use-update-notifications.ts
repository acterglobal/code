import { useNotifications } from './use-notifications'
import { useMutation, UseMutationState } from 'urql'

import { Notification } from '@acter/schema'
import UPDATE_NOTIFICATION_VIEWED from '@acter/schema/mutations/notifications-update-viewed.graphql'

type UseUpdateNotificationData = {
  updateNotification: Notification
}

type NotificationUpdateVariables = {
  ids: string[]
  viewedAt: Date
}

type HandleMethod = (notificationIds: string[]) => Promise<void>

/**
 * To update notifications when viewed
 * @returns updateNotification mutation and its results
 */
export const useUpdateNotifications = (): [
  UseMutationState<UseUpdateNotificationData, NotificationUpdateVariables>,
  HandleMethod
] => {
  const [result, updateNotification] = useMutation<
    UseUpdateNotificationData,
    NotificationUpdateVariables
  >(UPDATE_NOTIFICATION_VIEWED)
  const { reexecuteQuery } = useNotifications()

  const handleUpdateNotification = (notificationIds) =>
    updateNotification({
      ids: [...notificationIds],
      viewedAt: new Date(),
    }).then(() => reexecuteQuery({ requestPolicy: 'cache-and-network' }))

  return [result, handleUpdateNotification]
}

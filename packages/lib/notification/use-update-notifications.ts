import { OperationResult, useMutation, UseMutationState } from 'urql'

import { Notification } from '@acter/schema'
import UPDATE_NOTIFICATION_VIEWED from '@acter/schema/mutations/notification-update-viewed.graphql'

type UseUpdateNotificationData = {
  updateNotification: Notification
}

type NotificationUpdateVariables = {
  notificationId: string
  viewedAt: Date
}

type HandleMethod = (
  notificationId: string
) => Promise<
  OperationResult<UseUpdateNotificationData, NotificationUpdateVariables>
>

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
  const handleUpdateNotification = (notificationId) =>
    updateNotification({
      notificationId,
      viewedAt: new Date(),
    })

  return [result, handleUpdateNotification]
}

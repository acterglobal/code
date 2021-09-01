import UPDATE_NOTIFICATION_VIEWED from '@acter/schema/mutations/notification-update-viewed.graphql'
import { FetchResult, MutationResult, useMutation } from '@apollo/client'

type HandleMethod = (notificationId: string) => Promise<FetchResult>

/**
 * To update notifications when viewed
 * @param notificationId on which notification should update
 * @returns updateNotification mutation and its results
 */
export const useUpdateNotifications = (): [HandleMethod, MutationResult] => {
  const [updateNotification, { ...restQueryResult }] = useMutation(
    UPDATE_NOTIFICATION_VIEWED,
    {
      update: (cache, { data }) => {
        const { updateNotification: updatedNotification } = data
        cache.modify({
          fields: {
            notifications: (existingNotificationRefs, { readField }) => {
              return existingNotificationRefs.filter(
                (existingRef) =>
                  updatedNotification.id !== readField('id', existingRef)
              )
            },
          },
        })
      },
    }
  )
  const handleUpdateNotification = (notificationId) => {
    return updateNotification({
      variables: {
        notificationId,
        viewedAt: new Date(),
      },
    })
  }

  return [handleUpdateNotification, { ...restQueryResult }]
}

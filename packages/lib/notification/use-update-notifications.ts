import {
  FetchResult,
  MutationHookOptions,
  MutationResult,
  StoreObject,
  useMutation,
} from '@apollo/client'

import UPDATE_NOTIFICATION_VIEWED from '@acter/schema/mutations/notification-update-viewed.graphql'

type HandleMethod = (notificationId: string) => Promise<FetchResult>

/**
 * To update notifications when viewed
 * @returns updateNotification mutation and its results
 */
export const useUpdateNotifications = (
  options?: MutationHookOptions
): [HandleMethod, MutationResult] => {
  const [updateNotification, { ...restQueryResult }] = useMutation(
    UPDATE_NOTIFICATION_VIEWED,
    {
      ...options,
      update: (cache, result, updateOptions) => {
        options?.update?.(cache, result, updateOptions)

        const { updateNotification: updatedNotification } = result.data
        cache.modify({
          id: cache.identify((updatedNotification as unknown) as StoreObject),
          fields: (_, { DELETE }) => DELETE,
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

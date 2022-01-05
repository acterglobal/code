import { useEffect, useState } from 'react'

import { OperationContext, useQuery, UseQueryState } from 'urql'

import GET_NOTIFICATIONS from '@acter/lib/graphql/queries/get-new-notifications-by-user.graphql'
import {
  getNotificationsGroupByActer,
  NotificationsData,
} from '@acter/lib/notification/get-notifications-group-by-acter'
import { useUser } from '@acter/lib/user/use-user'

type ReexecuteQuery = (opts?: Partial<OperationContext>) => void
type UseNotificationsQueryResults = UseQueryState & {
  notifications: NotificationsData
  reexecuteQuery: ReexecuteQuery
}

/**
 * Gives notification info for new posts/activities/members on a specific acter
 * @returns object with count of new posts/activities/members
 */
export const useNotifications = (): UseNotificationsQueryResults => {
  const [notifications, setNotifications] = useState<NotificationsData>({})
  const { user } = useUser()

  const [{ data, fetching, ...restQueryResult }, reexecuteQuery] = useQuery({
    query: GET_NOTIFICATIONS,
    variables: { toActer: user?.Acter?.id },
    pause: !user?.Acter?.id,
  })

  useEffect(() => {
    if (data) {
      setNotifications(getNotificationsGroupByActer(data.notifications))
    }
  }, [data])

  return { notifications, fetching, reexecuteQuery, ...restQueryResult }
}

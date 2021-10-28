import { useEffect, useRef, useState } from 'react'

import { useQuery, UseQueryState } from 'urql'

import {
  getNotificationsGroupByActer,
  NotificationsData,
} from '@acter/lib/notification/get-notifications-group-by-acter'
import { useUser } from '@acter/lib/user/use-user'
import GET_NOTIFICATIONS from '@acter/schema/queries/get-new-notifications-by-user.graphql'

type UseNotificationsQueryResults = UseQueryState & {
  notifications: NotificationsData
}

/**
 * Gives notification info for new posts/activities/members on a specific acter
 * @returns object with count of new posts/activities/members
 */
export const useNotifications = (): UseNotificationsQueryResults => {
  const [notifications, setNotifications] = useState<NotificationsData>({})
  const { user } = useUser()

  const [{ data, fetching, ...restQueryResult }] = useQuery({
    query: GET_NOTIFICATIONS,
    variables: { toActer: user?.Acter?.id },
    pause: !user?.Acter?.id,
  })

  useEffect(() => {
    if (data) {
      setNotifications(getNotificationsGroupByActer(data.notifications))
    }
  }, [data])

  return { notifications, fetching, ...restQueryResult }
}

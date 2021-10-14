import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { useQuery } from 'urql'

import {
  getNotificationsGroupByActer,
  NotificationsData as Notifications,
} from '@acter/lib/notification/get-notifications-group-by-acter'
import { useUser } from '@acter/lib/user/use-user'
import GET_NOTIFICATIONS from '@acter/schema/queries/get-new-notifications-by-user.graphql'

type UseNotificationsQueryResults = {
  notifications: Notifications
}
/**
 * Gives notification info for new posts/activities/members on a specific acter
 * @returns object with count of new posts/activities/members
 */
export const useNotifications = (): UseNotificationsQueryResults => {
  const [notifications, setNotifications] = useState<Notifications>({})
  const { user } = useUser()
  const { asPath: url } = useRouter()

  const [{ data, ...restQueryResult }, refetch] = useQuery({
    query: GET_NOTIFICATIONS,
    pause: !user?.Acter?.id,
  })

  useEffect(() => {
    if (user) {
      refetch()
    }
  }, [url])

  useEffect(() => {
    if (data) {
      setNotifications(getNotificationsGroupByActer(data.notifications))
    }
  }, [data])

  return { notifications, ...restQueryResult }
}

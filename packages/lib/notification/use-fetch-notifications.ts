import { useEffect, useState } from 'react'

import { ApolloError, useLazyQuery } from '@apollo/client'

import {
  getNotificationsGroupByActer,
  NotificationsData as Notifications,
} from '@acter/lib/notification/get-notifications-group-by-acter'
import { useUser } from '@acter/lib/user/use-user'
import GET_NOTIFICATIONS from '@acter/schema/queries/get-new-notifications-by-user.graphql'

type UseFetchNotificationsQueryResults = {
  notifications: Notifications
  loading: boolean
  error: ApolloError
}
/**
 * Gives notification info for new posts/activities/members on a specific acter
 * @returns object with count of new posts/activities/members
 */
export const useFetchNotifications = (): UseFetchNotificationsQueryResults => {
  const [notifications, setNotifications] = useState<Notifications>({})
  const { user } = useUser()

  const [
    fetchNotifications,
    { loading, error, ...restQueryResult },
  ] = useLazyQuery(GET_NOTIFICATIONS, {
    onCompleted: (data) => {
      setNotifications(getNotificationsGroupByActer(data.notifications))
    },
  })

  useEffect(() => {
    if (user) {
      fetchNotifications({
        variables: { toActer: user.Acter.id },
      })
    }
  }, [user])

  return { notifications, loading, error, ...restQueryResult }
}

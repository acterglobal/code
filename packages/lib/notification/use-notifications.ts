import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { ApolloError, useLazyQuery } from '@apollo/client'

import {
  getNotificationsGroupByActer,
  NotificationsData as Notifications,
} from '@acter/lib/notification/get-notifications-group-by-acter'
import { useUser } from '@acter/lib/user/use-user'
import GET_NOTIFICATIONS from '@acter/schema/queries/get-new-notifications-by-user.graphql'

type UseNotificationsQueryResults = {
  notifications: Notifications
  loading: boolean
  error: ApolloError
}
/**
 * Gives notification info for new posts/activities/members on a specific acter
 * @returns object with count of new posts/activities/members
 */
export const useNotifications = (): UseNotificationsQueryResults => {
  const [notifications, setNotifications] = useState<Notifications>({})
  const { user } = useUser()
  const { asPath: url } = useRouter()

  const [
    fetchNotifications,
    { data, loading, error, refetch, ...restQueryResult },
  ] = useLazyQuery(GET_NOTIFICATIONS)

  useEffect(() => {
    if (user) {
      fetchNotifications({
        variables: { toActer: user.Acter.id },
      })
    }
  }, [user])

  useEffect(() => {
    if (user) {
      refetch({
        variables: { toActer: user.Acter.id },
      })
    }
  }, [url])

  useEffect(() => {
    if (data) {
      setNotifications(getNotificationsGroupByActer(data.notifications))
    }
  }, [data])

  return { notifications, loading, error, ...restQueryResult }
}

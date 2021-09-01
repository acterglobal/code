import { useEffect, useState } from 'react'
import { User } from '@acter/schema'
import { ApolloError, useQuery } from '@apollo/client'
import GET_NOTIFICATIONS from '@acter/schema/queries/get-new-notifications-by-user.graphql'
import {
  getNotificationsGroupByActer,
  NotificationsData,
} from '@acter/lib/notification/get-notifications-group-by-acter'

type UseFetchNotificationsQueryResults = {
  loading: boolean
  error: ApolloError
}

/**
 * Gives notification info for new posts/activities/members on a specific acter
 * @param acter
 * @returns object with count of new posts/activities/members
 */
export const useFetchNotifications = (
  user: User
): [NotificationsData, UseFetchNotificationsQueryResults] => {
  const [data, setData] = useState({})

  const {
    data: notificationsData,
    loading,
    error,
    ...restQueryResult
  } = useQuery(GET_NOTIFICATIONS, {
    variables: { toActer: user.Acter.id },
  })

  useEffect(() => {
    setData(getNotificationsGroupByActer(notificationsData?.notifications))
  }, [notificationsData])

  return [data, { loading, error, ...restQueryResult }]
}

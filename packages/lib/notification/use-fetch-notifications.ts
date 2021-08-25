import { useState } from 'react'
import { User } from '@acter/schema'
import { ApolloError, useQuery } from '@apollo/client'
import GET_NOTIFICATIONS from '@acter/schema/queries/get-new-notifications-by-user.graphql'
import {
  getNotificationsGroupByActer,
  NotificationsData as UseFetchNotificationsData,
} from './get-notifications-group-by-acter'

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
): [UseFetchNotificationsData, UseFetchNotificationsQueryResults] => {
  const [data, setData] = useState({})

  const { loading, error } = useQuery(GET_NOTIFICATIONS, {
    variables: { toActer: user.Acter.id },
    onCompleted: (data) =>
      setData(getNotificationsGroupByActer(data.notifications)),
  })

  return [data, { loading, error }]
}

import { GetServerSidePropsResult } from 'next'

import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { getLogger } from '@acter/lib/logger'
import { getNotificationRedirectUrl } from '@acter/lib/notification/get-notification-redirect-url'
import { getUrqlClient } from '@acter/lib/urql'
import { Acter, Notification } from '@acter/schema'
import UPDATE_NOTIFICATION_VIEWED from '@acter/schema/mutations/notification-update-viewed.graphql'
import GET_ACTER_BY_ID from '@acter/schema/queries/acter-by-id.graphql'
import GET_NOTIFICATION from '@acter/schema/queries/notification-get.graphql'

const redirectOnMissingData: GetServerSidePropsResult<Record<string, never>> = {
  props: {},
  notFound: true,
}

const l = getLogger('notificationRedirect')

export const notificationRedirect: ComposedGetServerSideProps = async ({
  params,
  props,
}) => {
  l.debug('Starting notificationRedirect')
  if (!props.user?.email || !params.id) {
    if (!props.user) l.debug('No user found', props)
    if (!params.id) l.debug('No id in params', params)
    return redirectOnMissingData
  }

  l.debug(`Moving forward with user ${props.user.email} and id ${params.id}`)

  const urqlClient = getUrqlClient()

  const { data, error } = await urqlClient
    .query<{
      findFirstNotification: Notification
    }>(GET_NOTIFICATION, {
      notificationId: params.id,
      email: props.user.email,
    })
    .toPromise()

  if (error) {
    l.error('Error', error)
    return {
      props: {},
      redirect: {
        destination: '/500',
      },
    }
  }

  const {
    findFirstNotification: notification,
  }: { findFirstNotification: Notification } = data

  if (!notification?.url) {
    l.debug('No notification found for id', props.id)
    l.debug(data)
    return redirectOnMissingData
  }

  // TODO: this should be moved to a background job
  try {
    const {
      data: { acter },
    } = await urqlClient
      .query<{ acter: Acter }>(GET_ACTER_BY_ID, {
        acterId: notification.onActerId,
      })
      .toPromise()

    const {
      data: { updateNotification },
    } = await urqlClient
      .mutation<{ updateNotification: Notification }>(
        UPDATE_NOTIFICATION_VIEWED,
        {
          notificationId: params.id,
          viewedAt: new Date(),
        }
      )
      .toPromise()

    return {
      props: {},
      redirect: {
        destination: getNotificationRedirectUrl(updateNotification, acter),
      },
    }
  } catch (err) {
    // Just log the update error and redirect anyways
    l.error(err)
    return {
      props,
      redirect: {
        destination: notification.url,
      },
    }
  }
}

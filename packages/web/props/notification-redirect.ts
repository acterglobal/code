import { GetServerSidePropsResult } from 'next'
import { ComposedGetServerSideProps } from '@acter/lib/compose-props'
import { initializeApollo } from '@acter/lib/apollo'
import GET_NOTIFICATION from '@acter/schema/queries/notification-get.graphql'
import UPDATE_NOTIFICATION_VIEWED from '@acter/schema/mutations/notification-update-viewed.graphql'
import { Notification } from '@acter/schema/types'

const redirectOnMissingData: GetServerSidePropsResult<Record<string, never>> = {
  props: {},
  notFound: true,
}

export const notificationRedirect: ComposedGetServerSideProps = async ({
  params,
  props,
}) => {
  console.log('Starting notificationRedirect')
  if (!props.user?.email || !params.id) {
    if (!props.user) console.log('No user found', props)
    if (!params.id) console.log('No id in params', params)
    return redirectOnMissingData
  }

  console.log(
    `Moving forward with user ${props.user.email} and id ${params.id}`
  )

  const apollo = initializeApollo()
  const { data, error } = await apollo.query({
    query: GET_NOTIFICATION,
    variables: {
      notificationId: params.id,
      email: props.user.email,
    },
  })

  if (error) {
    console.error('Error', error)
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
    console.log('No notification found for id', props.id)
    console.log(data)
    return redirectOnMissingData
  }

  // TODO: this should be moved to a background job
  const { data: updateData, error: updateError } = await apollo.mutate({
    mutation: UPDATE_NOTIFICATION_VIEWED,
    variables: {
      notificationId: params.id,
      viewedAt: new Date(),
    },
  })

  if (updateError) console.error(updateError)

  const { updateNotification: updateNotification } = updateData

  return {
    props: {},
    redirect: {
      destination: updateNotification.url,
    },
  }
}

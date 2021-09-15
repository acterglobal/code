import { useRouter } from 'next/router'

import { getUserProfile, notificationRedirect } from 'props'

import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'

const defaultRoute = '/profile/info'

export const NotificationPage = (): void => {
  console.log('In render')
  const router = useRouter()
  router.replace(defaultRoute)
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true), notificationRedirect)

export default NotificationPage

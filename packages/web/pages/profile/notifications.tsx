import React from 'react'
import { NextPage } from 'next'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { ProfileNotificationsForm } from '@acter/components/user/form/notifications'
import { User } from '@acter/schema'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getUserProfile } from 'props'

interface UserProfileNotificationsPageProps {
  user: User
}

export const UserProfileNotificationsPage: NextPage<UserProfileNotificationsPageProps> =
  ({ user }) => {
    const [updateActer] = useUpdateActer(user.Acter)
    return (
      <Layout user={user}>
        <Head title="Notifications - Profile - Acter" />
        <main>
          <ProfileNotificationsForm user={user} onSubmit={updateActer} />
        </main>
      </Layout>
    )
  }

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(true))

export default UserProfileNotificationsPage

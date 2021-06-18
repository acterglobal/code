import React from 'react'
import { NextPage } from 'next'
import { useUpdateActer } from 'src/lib/acter/use-update-acter'
import { Layout } from 'src/components/layout'
import { Head } from 'src/components/layout/head'
import { ProfileNotificationsForm } from 'src/components/user/form/notifications'
import { User } from '@schema'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile } from 'src/props'

interface UserProfileNotificationsPageProps {
  user: User
}

export const UserProfileNotificationsPage: NextPage<UserProfileNotificationsPageProps> = ({
  user,
}) => {
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

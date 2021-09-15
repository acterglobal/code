import React from 'react'

import { NextPage } from 'next'

import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { ProfileNotificationsForm } from '@acter/components/user/form/notifications'

export const UserProfileNotificationsPage: NextPage = () => {
  return (
    <Layout>
      <Head title="Notifications - Profile - Acter" />
      <main>
        <ProfileNotificationsForm />
      </main>
    </Layout>
  )
}

export default UserProfileNotificationsPage

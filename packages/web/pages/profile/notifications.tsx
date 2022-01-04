import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { ProfileNotificationsForm } from '@acter/components/user/form/notifications'

export const UserProfileNotificationsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Notifications - Profile - Acter" />
      <main>
        <ProfileNotificationsForm />
      </main>
    </>
  )
}

export default UserProfileNotificationsPage

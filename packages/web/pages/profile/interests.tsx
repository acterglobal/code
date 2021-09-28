import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/layout/head'
import { ProfileInterestsForm } from '@acter/components/user/form/interests'

export const UserProfileInterestsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Profile - Acter" />
      <main>
        <ProfileInterestsForm />
      </main>
    </>
  )
}

export default UserProfileInterestsPage

import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { ProfileInfoForm } from '@acter/components/user/form/info'

export const UserProfileInfoPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Profile - Acter" />
      <main>
        <ProfileInfoForm />
      </main>
    </>
  )
}

export default UserProfileInfoPage

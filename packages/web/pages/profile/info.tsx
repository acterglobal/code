import React from 'react'

import { NextPage } from 'next'

import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { ProfileInfoForm } from '@acter/components/user/form/info'

export const UserProfileInfoPage: NextPage = () => {
  return (
    <Layout>
      <Head title="Profile - Acter" />
      <main>
        <ProfileInfoForm />
      </main>
    </Layout>
  )
}

export default UserProfileInfoPage

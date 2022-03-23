import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'success-messages',
      'notifications',
    ])),
  },
})

export default UserProfileNotificationsPage

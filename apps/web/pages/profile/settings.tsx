import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { ProfileLayout } from '@acter/components/user/profile/layout'
import { ProfileSettings } from '@acter/components/user/profile/settings'

export const UserProfileSettingsPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Notifications - Profile - Acter" />
      <main>
        <ProfileSettings />
      </main>
    </>
  )
}
UserProfileSettingsPage.getLayout = (page) => (
  <ProfileLayout>{page}</ProfileLayout>
)

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

export default UserProfileSettingsPage

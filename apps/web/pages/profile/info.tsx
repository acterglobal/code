import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { ProfileView } from '@acter/components/user/profile'
import { ProfileLayout } from '@acter/components/user/profile/layout'

export const UserProfileInfoPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Profile - Acter" />
      <main>
        <ProfileView />
      </main>
    </>
  )
}

UserProfileInfoPage.getLayout = (page) => <ProfileLayout>{page}</ProfileLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'success-messages',
      'search'
    ])),
  },
})
export default UserProfileInfoPage

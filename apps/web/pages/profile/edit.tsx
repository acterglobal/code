import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { ProfileLayout } from '@acter/../packages/components/user/profile/layout'
import { Head } from '@acter/components/atoms/head'
import { ProfileEdit } from '@acter/components/user/profile/edit'

export const UserProfileEditPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Profile - Acter" />
      <main>
        <ProfileEdit />
      </main>
    </>
  )
}
UserProfileEditPage.getLayout = (page) => <ProfileLayout>{page}</ProfileLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'success-messages',
      'search',
    ])),
  },
})

export default UserProfileEditPage

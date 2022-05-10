import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'success-messages',
    ])),
  },
})
export default UserProfileInfoPage

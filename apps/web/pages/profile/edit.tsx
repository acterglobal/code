import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { ProfileLayout } from '@acter/../packages/components/user/profile/layout'
import { Head } from '@acter/components/atoms/head'
import { ProfileInterestsForm } from '@acter/components/user/form/interests'

export const UserProfileEditPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Profile - Acter" />
      <main>
        {/* <ProfileInterestsForm /> */}
        Edit page
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
    ])),
  },
})

export default UserProfileEditPage

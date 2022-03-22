import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'interests'])),
  },
})

export default UserProfileInterestsPage

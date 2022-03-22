import React, { useEffect, useState } from 'react'

import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'
import { getActerLandingPageStaticPaths } from 'static-paths/acter-landing-page-paths'

import { ActerSettings } from '@acter/components/acter/settings'
import { Head } from '@acter/components/atoms/head'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { ActerLayout } from '@acter/components/layout/acter'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const ActerSettingsPage: NextPageWithLayout = () => {
  const baseTitle = 'Settings - Acter'
  const [title, setTitle] = useState(baseTitle)

  const { acter, fetching: acterLoading } = useAuthentication()

  useEffect(() => {
    if (acter?.name) setTitle(`${acter.name} - ${baseTitle}`)
  }, [acter])

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <main>
        <ActerSettings />
      </main>
    </>
  )
}

ActerSettingsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'settings',
      'invitations',
    ])),
  },
})

export const getStaticPaths: GetStaticPaths = getActerLandingPageStaticPaths

export default ActerSettingsPage

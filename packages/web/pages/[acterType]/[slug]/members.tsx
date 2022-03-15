import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'
import { getActerLandingPageStaticPaths } from 'static-paths/acter-landing-page-paths'

import { ActerMembers } from '@acter/components/acter/members'
import { Head } from '@acter/components/atoms/head'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { ActerLayout } from '@acter/components/layout/acter'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const ActerMembersPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('members')
  const { fetching: acterLoading } = useAuthentication()

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <ActerMembers />
    </>
  )
}

ActerMembersPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'interests'])),
  },
})

export const getStaticPaths: GetStaticPaths = getActerLandingPageStaticPaths

export default ActerMembersPage

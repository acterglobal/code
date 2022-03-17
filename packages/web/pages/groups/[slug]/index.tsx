import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'
import { getGroupLandingPageStaticPaths } from 'static-paths/group-landing-page-paths'

import { Head } from '@acter/components/atoms/head'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { GroupLanding } from '@acter/components/group'
import { GroupLayout } from '@acter/components/group/layout/overall'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const GroupLandingPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('Acter')
  const { fetching: acterLoading } = useAuthentication()

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <GroupLanding />
    </>
  )
}

GroupLandingPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'invitations',
      'group-landing',
    ])),
  },
})

export const getStaticPaths: GetStaticPaths = getGroupLandingPageStaticPaths

export default GroupLandingPage

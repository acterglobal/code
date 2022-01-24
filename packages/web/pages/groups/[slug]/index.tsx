import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { GroupLanding } from '@acter/components/group'
import { GroupLayout } from '@acter/components/group/layout/overall'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const GroupLandingPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { title } = useActerTitle('Acter')
  const { fetching: acterLoading, redirect } = useAuthentication()

  useEffect(() => {
    // to do fix redirect after login
    if (redirect) {
      router.push(redirect)
    }
  }, [redirect])

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <GroupLanding />
    </>
  )
}

GroupLandingPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export default GroupLandingPage

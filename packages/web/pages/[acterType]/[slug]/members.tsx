import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerMembers } from '@acter/components/acter/members'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const ActerMembersPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { title } = useActerTitle('members')
  const { fetching: acterLoading, redirect } = useAuthentication()

  useEffect(() => {
    if (redirect) {
      router.push(redirect)
    }
  }, [redirect])

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <ActerMembers />
    </>
  )
}

ActerMembersPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerMembersPage

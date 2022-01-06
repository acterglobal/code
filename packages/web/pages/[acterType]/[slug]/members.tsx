import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerMembers } from '@acter/components/acter/members'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { getPrivacySettings } from '@acter/lib/acter/get-privacy-settings'
import { useActer } from '@acter/lib/acter/use-acter'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useUser } from '@acter/lib/user/use-user'

export const ActerMembersPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { title } = useActerTitle('members')

  const { user, fetching: userLoading } = useUser()
  const { acter, fetching: acterLoading } = useActer()

  const isPrivate = getPrivacySettings(acter)

  const isMember = checkMemberAccess(user, acter)

  useEffect(() => {
    if (!acterLoading && !userLoading) {
      if (!user && isPrivate) router.push('/401')
      if (!acter) router.push('/404')

      if (user && acter) {
        if (isPrivate && !isMember) router.push('/403')
      }
    }
  }, [acterLoading, acter, userLoading, user])

  if (acterLoading || userLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <ActerMembers />
    </>
  )
}

ActerMembersPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerMembersPage

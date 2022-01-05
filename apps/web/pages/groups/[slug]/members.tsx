import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { GroupLayout } from '@acter/components/group/layout/overall'
import { GroupMembers } from '@acter/components/group/members'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const GroupMembersPage: NextPageWithLayout = () => {
  const { acter, fetching: acterLoading } = useAuthentication()

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={`${acter?.name} Members - Acter`} />
      <GroupMembers />
    </>
  )
}

GroupMembersPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export default GroupMembersPage

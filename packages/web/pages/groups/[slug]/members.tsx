import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { GroupLayout } from '@acter/components/group/layout/overall'
import { GroupMembers } from '@acter/components/group/members'
import { Head } from '@acter/components/layout/head'
import { useActer } from '@acter/lib/acter/use-acter'

export const GroupMembersPage: NextPageWithLayout = () => {
  const { acter } = useActer()
  return (
    <>
      <Head title={`${acter?.name} Members - Acter`} />
      <GroupMembers />
    </>
  )
}

GroupMembersPage.getLayout = (page) => <GroupLayout>{page}</GroupLayout>

export default GroupMembersPage

import { NextPageWithLayout } from 'pages/_app'

import { ActerLayout } from '@acter/components/acter/layout'
import { ActerMembers } from '@acter/components/acter/members'
import { Head } from '@acter/components/layout/head'
import { useActerTitle } from '@acter/lib/acter/use-title'

export const ActerMembersPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('members')
  return (
    <>
      <Head title={title} />
      <ActerMembers />
    </>
  )
}

ActerMembersPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerMembersPage

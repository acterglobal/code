import { NextPageWithLayout } from 'pages/_app'

import { ActerMembers } from '@acter/components/acter/members'
import { Head } from '@acter/components/atoms/head'
import { Custom401 } from '@acter/components/errors'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { getPrivacySettings } from '@acter/lib/acter/get-privacy-settings'
import { useActer } from '@acter/lib/acter/use-acter'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useUser } from '@acter/lib/user/use-user'

export const ActerMembersPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('members')

  const { acter } = useActer()
  const { user, fetching } = useUser()

  if (fetching) return <LoadingSpinner />

  const isPrivate = getPrivacySettings(acter)

  const isMember = checkMemberAccess(user, acter)

  if (!user) return <Custom401 />

  if (user && isPrivate && !isMember) return <Custom401 user={user} isPrivate />
  return (
    <>
      <Head title={title} />
      <ActerMembers />
    </>
  )
}

ActerMembersPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerMembersPage

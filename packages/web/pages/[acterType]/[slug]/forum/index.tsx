import { NextPageWithLayout } from 'pages/_app'

import { ActerPosts } from '@acter/components/acter/posts'
import { Head } from '@acter/components/atoms/head'
import { Custom401 } from '@acter/components/errors'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { checkMemberAccess } from '@acter/lib/acter/check-member-access'
import { getPrivacySettings } from '@acter/lib/acter/get-privacy-settings'
import { useActer } from '@acter/lib/acter/use-acter'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useUser } from '@acter/lib/user/use-user'

export const ActerPostsPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('forum')
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
      <ActerPosts />
    </>
  )
}

ActerPostsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerPostsPage

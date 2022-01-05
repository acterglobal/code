import { NextPageWithLayout } from 'pages/_app'

import { ActerPosts } from '@acter/components/acter/posts'
import { Head } from '@acter/components/atoms/head'
import { NotLoggedInMessage, Custom401 } from '@acter/components/errors'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useUser } from '@acter/lib/user/use-user'

export const ActerPostsPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('forum')
  const { user, fetching } = useUser()

  if (fetching) return <LoadingSpinner />

  return (
    <>
      {!user ? (
        <Custom401 />
      ) : (
        <>
          <Head title={title} />
          <ActerPosts />
        </>
      )}
    </>
  )
}

ActerPostsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerPostsPage

import { NextPageWithLayout } from 'pages/_app'

import { ActerLayout } from '@acter/components/acter/layout'
import { ActerPosts } from '@acter/components/acter/posts'
import { Head } from '@acter/components/atoms/head'
import { useActerTitle } from '@acter/lib/acter/use-title'

export const ActerPostsPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('forum')

  return (
    <>
      <Head title={title} />
      <ActerPosts />
    </>
  )
}

ActerPostsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerPostsPage

import { NextPageWithLayout } from 'pages/_app'
import { getInterests } from 'props'

import { ActerLayout } from '@acter/components/acter/layout'
import { ActerPosts } from '@acter/components/acter/posts'
import { Head } from '@acter/components/layout/head'
import { useActerTitle } from '@acter/lib/acter/use-title'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { InterestType } from '@acter/schema'

interface PostsPageProps {
  interestTypes: InterestType[]
}

export const ActerPostsPage: NextPageWithLayout<PostsPageProps> = ({
  interestTypes,
}) => {
  const { title } = useActerTitle('forum')

  return (
    <>
      <Head title={title} />
      <ActerPosts interestTypes={interestTypes} />
    </>
  )
}

ActerPostsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default ActerPostsPage

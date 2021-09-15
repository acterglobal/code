import { NextPage } from 'next'
import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { getInterests } from 'props'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { InterestType } from '@acter/schema'
import { ActerPosts } from '@acter/components/acter/posts'
import { useActer } from '@acter/lib/acter/use-acter'

interface PostsPageProps {
  interestTypes: InterestType[]
}

export const ActerPostsPage: NextPage<PostsPageProps> = ({ interestTypes }) => {
  const { acter } = useActer()
  return (
    <Layout>
      <Head title={`${acter?.name}  - forum`} />
      <ActerPosts interestTypes={interestTypes} />
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default ActerPostsPage

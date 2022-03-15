import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'
import { getPostStaticPath } from 'static-paths/acter-landingpage-post-paths'

import { ActerPost } from '@acter/components/acter/posts/post'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { useActerTitle } from '@acter/lib/acter/use-title'

export const PostPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('post')
  return (
    <>
      <Head title={title} />
      <ActerPost />
    </>
  )
}

PostPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'interests'])),
  },
})

export const getStaticPaths: GetStaticPaths = getPostStaticPath

export default PostPage

import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { ActerPost } from '@acter/components/acter/posts/post'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { prisma } from '@acter/schema/prisma'

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

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await prisma.post.findMany({
    select: {
      id: true,
      Acter: {
        select: {
          slug: true,
          ActerType: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  })

  const paths = posts.map((post) => ({
    params: {
      acterType: post.Acter.ActerType.name,
      slug: post.Acter.slug,
      id: post.id,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}
export default PostPage

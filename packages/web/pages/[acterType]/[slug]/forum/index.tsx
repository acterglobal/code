import { GetStaticPaths, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { ActerPosts } from '@acter/components/acter/posts'
import { Head } from '@acter/components/atoms/head'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { ActerLayout } from '@acter/components/layout/acter'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'
import { prisma } from '@acter/schema/prisma'

export const ActerPostsPage: NextPageWithLayout = () => {
  const { title } = useActerTitle('forum')
  const { fetching: acterLoading } = useAuthentication()

  if (acterLoading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <ActerPosts />
    </>
  )
}

ActerPostsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'interests'])),
  },
})

export const getStaticPaths: GetStaticPaths = async () => {
  const acters = await prisma.acter.findMany({
    select: {
      slug: true,
      ActerType: {
        select: {
          name: true,
        },
      },
    },
    where: {
      ActerType: {
        name: {
          notIn: ['activity', 'group', 'user'],
        },
      },
      deletedAt: null,
    },
  })

  const paths = acters.map((acter) => ({
    params: { acterType: acter.ActerType.name, slug: acter.slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export default ActerPostsPage

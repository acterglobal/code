import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { GraphQLError } from 'graphql'
import { NextPageWithLayout } from 'pages/_app'

import { ActerPosts } from '@acter/components/acter/posts'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { useActer } from '@acter/lib/acter/use-acter'
import { useActerTitle } from '@acter/lib/acter/use-title'
import {
  NotAuthorizedError,
  NotLoggedError,
} from '@acter/lib/errors/graphql-errors'

export const ActerPostsPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { title } = useActerTitle('forum')
  const { error: acterError } = useActer()

  useEffect(() => {
    if (acterError) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { graphQLErrors }: GraphQLError[] | any = acterError
      graphQLErrors.forEach((err) => {
        if (err.message === NotAuthorizedError.message) {
          router.push('/403')
        }
        if (err.message === NotLoggedError.message) {
          router.push('/401')
        }
      })
    }
  }, [acterError])

  return (
    <>
      <Head title={title} />
      <ActerPosts />
    </>
  )
}

ActerPostsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerPostsPage

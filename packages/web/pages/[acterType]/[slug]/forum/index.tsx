import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { NextPageWithLayout } from 'pages/_app'

import { ActerPosts } from '@acter/components/acter/posts'
import { Head } from '@acter/components/atoms/head'
import { ActerLayout } from '@acter/components/layout/acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActerTitle } from '@acter/lib/acter/use-title'
import { useAuthentication } from '@acter/lib/authentication/use-authentication'

export const ActerPostsPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { title } = useActerTitle('forum')
  const { loading, redirect } = useAuthentication()

  useEffect(() => {
    // to do fix redirect after login
    if (redirect) {
      router.push(redirect)
    }
  }, [redirect])

  if (loading) return <LoadingSpinner />

  return (
    <>
      <Head title={title} />
      <ActerPosts />
    </>
  )
}

ActerPostsPage.getLayout = (page) => <ActerLayout>{page}</ActerLayout>

export default ActerPostsPage

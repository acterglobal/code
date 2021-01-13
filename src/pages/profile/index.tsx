import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { useSession } from 'next-auth/client'
import { Session } from 'next-auth'

import { CircularProgress } from '@material-ui/core'
import Head from 'next/head'
import { Layout } from 'src/components/layout'

import { User } from '@generated/type-graphql'
import QUERY_PROFILE_BY_EMAIL from 'graphql/queries/query-profile-by-email.graphql'

const UserProfilePage = () => {
  const [session, sessionLoading] = useSession()
  if (sessionLoading) {
    return <CircularProgress />
  }

  const router = useRouter()
  useEffect(() => {
    if (!sessionLoading && !session) {
      router.push('/')
    }
  }, [session, sessionLoading])
  if (!session) {
    return 'redirecting'
  }

  const { loading, error, data } = useQuery(QUERY_PROFILE_BY_EMAIL, {
    variables: { email: session.user.email },
  })

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    console.log(error)

    return <p>Error</p>
  }

  const { user }: { user: User } = data

  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>

      <main>{user.email}</main>
    </Layout>
  )
}

export default UserProfilePage

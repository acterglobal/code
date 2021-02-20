import { NextPage, GetServerSideProps } from 'next'
import { getTokenUser } from 'src/lib/next-auth/jwt'

import Head from 'next/head'

import { Layout } from 'src/components/layout'

import { User } from '@generated/type-graphql'

interface HomeProps {
  user?: User
}

const Home: NextPage<HomeProps> = ({ user }) => (
  <Layout loggedInUser={user}>
    <Head>
      <title>Acter</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <p>The platform for coordinating action on global challenges.</p>
      <p>
        In a world that requires new ways of collaborating, Acter help people,
        organisations and systems build and manage small communities to large
        ecosystems, enabling them to accelerate their impact.
      </p>
    </main>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const user = await getTokenUser(req)

  return {
    props: {
      user,
    },
  }
}

export default Home

import { getSession, signIn, signOut } from 'next-auth/client'

import Head from 'next/head'

import { Layout } from 'src/components/layout'

const Home = () => (
  <Layout>
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

export default Home

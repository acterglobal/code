import { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile } from 'src/props'

import { Layout } from 'src/components/layout'

import { User } from '@generated/type-graphql'

interface HomeProps {
  user?: User
}

const Home: NextPage<HomeProps> = ({ user }) => (
  <Layout user={user}>
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

// export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
//   composeProps(ctx, getUserProfile(false))
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
    redirect: {
      destination: 'networks/greenlight-aarhus',
    },
  }
}

export default Home

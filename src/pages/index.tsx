import { NextPage } from 'next'
import { Head } from 'src/components/layout/head'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile, searchActers } from 'src/props'

import { Layout } from 'src/components/layout'
import { Search } from 'src/components/search'

import { Acter, User } from '@schema'

import { ACTERS } from 'src/constants'

interface HomeProps {
  acters: Acter[]
  user?: User
}

const Home: NextPage<HomeProps> = ({ acters, user }) => (
  <Layout user={user}>
    <Head title="Acter" />

    <main>
      <Search acters={acters} dataType={ACTERS} />
    </main>
  </Layout>
)

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(false), searchActers)

export default Home

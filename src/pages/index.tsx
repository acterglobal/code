import React from 'react'
import { NextPage } from 'next'
import { Head } from 'src/components/layout/head'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile, searchActers, getInterests } from 'src/props'

import { Layout } from 'src/components/layout'
import { Search } from 'src/components/search'

import { Acter, InterestType, User } from '@schema'

import { ACTERS, ACTIVITIES } from 'src/constants'

interface HomeProps {
  acters: Acter[]
  user?: User
  interestTypes: InterestType[]
}

const Home: NextPage<HomeProps> = ({ acters, interestTypes, user }) => (
  <Layout user={user}>
    <Head title="Acter" />

    <main>
      <Search
        acters={acters}
        searchType={ACTIVITIES}
        interestTypes={interestTypes}
      />
    </main>
  </Layout>
)

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(false), searchActers, getInterests)

export default Home

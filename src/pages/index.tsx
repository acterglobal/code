import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { Head } from 'src/components/layout/head'

import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile } from 'src/props'
import { useLazyQuery } from '@apollo/client'
import SEARCH_ACTERS from 'api/queries/acters-search.graphql'
import { Layout } from 'src/components/layout'
import { Search } from 'src/components/search'

import { Acter, User } from '@schema'

import { ACTERS } from 'src/constants'

interface HomeProps {
  acters: Acter[]
  user?: User
}

const Home: NextPage<HomeProps> = ({ user }) => {
  const [getActers, { data }] = useLazyQuery(SEARCH_ACTERS)

  useEffect(() => {
    getActers({ variables: { searchTxt: '' } })
  }, [])

  return (
    <Layout user={user}>
      <Head title="Acter" />

      <main>
        <Search
          acters={data?.acters}
          dataType={ACTERS}
          handleSearch={(text) => getActers({ variables: { searchTxt: text } })}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(false))

export default Home

import React from 'react'
import { NextPage } from 'next'
import { Head } from 'src/components/layout/head'
import { Layout } from 'src/components/layout'
import { Search } from 'src/components/search'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile, searchActers, getInterests } from 'src/props'
import { Acter, InterestType, User } from '@schema'
import { ACTERS } from 'src/constants'

interface SearchPageProps {
  acters: Acter[]
  user?: User
  interestTypes: InterestType[]
}

const SearchPage: NextPage<SearchPageProps> = ({
  acters,
  interestTypes,
  user,
}) => {
  return (
    <Layout user={user}>
      <Head title="Acter" />

      <main>
        <Search
          acters={acters}
          searchType={ACTERS}
          interestTypes={interestTypes}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(false), searchActers, getInterests)

export default SearchPage

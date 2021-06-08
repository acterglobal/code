import React from 'react'
import { NextPage } from 'next'
import { Head } from 'src/components/layout/head'
import { Layout } from 'src/components/layout'
import { Search } from 'src/components/search'
import { composeProps, ComposedGetServerSideProps } from 'lib/compose-props'
import { getUserProfile, searchActivities, getInterests } from 'src/props'
import { Acter, InterestType, User } from '@schema'
import { ACTIVITIES } from 'src/constants'

interface SearchPageProps {
  acters: Acter[]
  user?: User
  interestTypes: InterestType[]
}

const SearchActivitiesPage: NextPage<SearchPageProps> = ({
  acters,
  interestTypes,
  user,
}) => {
  return (
    <Layout user={user} searchType={ACTIVITIES}>
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
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(false), searchActivities, getInterests)

export default SearchActivitiesPage

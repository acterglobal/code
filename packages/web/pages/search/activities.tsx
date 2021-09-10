import React from 'react'
import { NextPage } from 'next'
import { Head } from '@acter/components/layout/head'
import { Layout } from '@acter/components/layout'
import { Search } from '@acter/components/search'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getUserProfile, getInterests } from 'props'
import { InterestType, User } from '@acter/schema'
import { SearchType } from '@acter/lib/constants'

interface SearchPageProps {
  interestTypes: InterestType[]
  user?: User
}

const SearchActivitiesPage: NextPage<SearchPageProps> = ({
  interestTypes,
  user,
}) => {
  return (
    <Layout user={user} searchType={SearchType.ACTIVITIES}>
      <Head title="Acter" />

      <main>
        <Search
          searchType={SearchType.ACTIVITIES}
          interestTypes={interestTypes}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(false), getInterests)

export default SearchActivitiesPage

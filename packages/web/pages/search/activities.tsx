import React from 'react'
import { NextPage } from 'next'
import { Head } from '@acter/components/layout/head'
import { Layout } from '@acter/components/layout'
import { Search } from '@acter/components/search'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import {
  getUserProfile,
  searchActivities,
  getInterests,
  getActivityTypes,
} from 'props'
import { ActerWithSlugAndType } from '@acter/lib/acter/acter-as-url'
import { ActivityType, InterestType, User } from '@acter/schema'
import { SearchType } from '@acter/lib/constants'

interface SearchPageProps {
  acters: ActerWithSlugAndType[]
  activityTypes: ActivityType[]
  interestTypes: InterestType[]
  user?: User
}

const SearchActivitiesPage: NextPage<SearchPageProps> = ({
  acters,
  activityTypes,
  interestTypes,
  user,
}) => {
  return (
    <Layout
      user={user}
      searchType={SearchType.ACTIVITIES}
      acterTypes={activityTypes}
    >
      <Head title="Acter" />

      <main>
        <Search
          acters={acters}
          searchType={SearchType.ACTIVITIES}
          interestTypes={interestTypes}
        />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(
    ctx,
    getUserProfile(false),
    getActivityTypes,
    searchActivities,
    getInterests
  )

export default SearchActivitiesPage

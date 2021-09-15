import React from 'react'

import { NextPage } from 'next'

import { getInterests } from 'props'

import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { Search } from '@acter/components/search'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { SearchType } from '@acter/lib/constants'
import { InterestType } from '@acter/schema'

interface SearchPageProps {
  interestTypes: InterestType[]
}

const SearchActivitiesPage: NextPage<SearchPageProps> = ({ interestTypes }) => {
  return (
    <Layout searchType={SearchType.ACTIVITIES}>
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
  composeProps(ctx, getInterests)

export default SearchActivitiesPage

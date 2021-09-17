import React from 'react'

import { NextPageWithLayout } from 'pages/_app'
import { getInterests } from 'props'

import { Head } from '@acter/components/layout/head'
import { Search } from '@acter/components/search'
import { SearchLayout } from '@acter/components/search/layout'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { SearchType } from '@acter/lib/constants'
import { InterestType } from '@acter/schema'

interface SearchPageProps {
  interestTypes: InterestType[]
}

const SearchActivitiesPage: NextPageWithLayout<SearchPageProps> = ({
  interestTypes,
}) => {
  return (
    <>
      <Head title="Acter" />

      <main>
        <Search
          searchType={SearchType.ACTIVITIES}
          interestTypes={interestTypes}
        />
      </main>
    </>
  )
}

SearchActivitiesPage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getInterests)

export default SearchActivitiesPage

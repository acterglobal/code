import React from 'react'

import { NextPageWithLayout } from 'pages/_app'
import { getInterests, getActerTypes } from 'props'

import { Head } from '@acter/components/layout/head'
import { Search } from '@acter/components/search'
import { SearchLayout } from '@acter/components/search/layout'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { SearchType } from '@acter/lib/constants'
import { Acter, InterestType } from '@acter/schema'

interface SearchPageProps {
  acters: Acter[]
  interestTypes: InterestType[]
}

const SearchPage: NextPageWithLayout<SearchPageProps> = ({ interestTypes }) => {
  return (
    <>
      <Head title="Acter" />

      <main>
        <Search searchType={SearchType.ACTERS} interestTypes={interestTypes} />
      </main>
    </>
  )
}

SearchPage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getActerTypes, getInterests)

export default SearchPage

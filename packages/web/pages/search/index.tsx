import React from 'react'

import { NextPageWithLayout } from 'pages/_app'
import { getInterests, getActerTypes } from 'props'

import { Layout } from '@acter/components/layout'
import { Head } from '@acter/components/layout/head'
import { Search } from '@acter/components/search'
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

SearchPage.getLayout = (page) => (
  <Layout searchType={SearchType.ACTERS}>{page}</Layout>
)

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getActerTypes, getInterests)

export default SearchPage

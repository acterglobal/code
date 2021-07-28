import React from 'react'
import { NextPage } from 'next'
import { Head } from '@acter/components/layout/head'
import { Layout } from '@acter/components/layout'
import { Search } from '@acter/components/search'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getInterests, getActerTypes } from 'props'
import { Acter, InterestType } from '@acter/schema'
import { SearchType } from '@acter/lib/constants'

interface SearchPageProps {
  acters: Acter[]
  interestTypes: InterestType[]
}

const SearchPage: NextPage<SearchPageProps> = ({ interestTypes }) => {
  return (
    <Layout searchType={SearchType.ACTERS}>
      <Head title="Acter" />

      <main>
        <Search searchType={SearchType.ACTERS} interestTypes={interestTypes} />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getActerTypes, getInterests)

export default SearchPage

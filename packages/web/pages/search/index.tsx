import React from 'react'
import { NextPage } from 'next'
import { Head } from '@acter/components/layout/head'
import { Layout } from '@acter/components/layout'
import { Search } from '@acter/components/search'
import {
  composeProps,
  ComposedGetServerSideProps,
} from '@acter/lib/compose-props'
import { getUserProfile, getInterests, getActerTypes } from 'props'
import { Acter, ActerType, InterestType, User } from '@acter/schema'
import { SearchType } from '@acter/lib/constants'

interface SearchPageProps {
  acters: Acter[]
  acterTypes: ActerType[]
  interestTypes: InterestType[]
  user?: User
}

const SearchPage: NextPage<SearchPageProps> = ({
  acterTypes,
  interestTypes,
  user,
}) => {
  return (
    <Layout user={user} searchType={SearchType.ACTERS} acterTypes={acterTypes}>
      <Head title="Acter" />

      <main>
        <Search searchType={SearchType.ACTERS} interestTypes={interestTypes} />
      </main>
    </Layout>
  )
}

export const getServerSideProps: ComposedGetServerSideProps = (ctx) =>
  composeProps(ctx, getUserProfile(false), getActerTypes, getInterests)

export default SearchPage

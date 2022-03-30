import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { SearchLayout } from '@acter/components/layout/search'
import { Search } from '@acter/components/pages/search'

const SearchActivitiesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Acter" />

      <main>
        <Search />
      </main>
    </>
  )
}

SearchActivitiesPage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, [
      'common',
      'interests',
      'success-messages',
      'search',
    ])),
  },
})

export default SearchActivitiesPage

import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { SearchLayout } from '@acter/components/layout/search'
import { SearchPage as SearchPageComponent } from '@acter/components/pages/search/acter'

const SearchPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Acter" />

      <main>
        <SearchPageComponent />
      </main>
    </>
  )
}

SearchPage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>

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

export default SearchPage

import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { SearchPage as SearchPageComponent } from '@acter/components/search/pages'
import { SearchTemplate } from '@acter/components/search/templates'

const SearchActivitiesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Acter" />

      <main>
        <SearchPageComponent />
      </main>
    </>
  )
}

SearchActivitiesPage.getLayout = (page) => (
  <SearchTemplate>{page}</SearchTemplate>
)

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

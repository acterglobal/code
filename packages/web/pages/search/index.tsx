import React from 'react'

import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { SearchLayout } from '@acter/components/layout/search'
import { Search } from '@acter/components/pages/search'

const SearchPage: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Acter" />

      <main>
        <Search />
      </main>
    </>
  )
}

SearchPage.getLayout = (page) => <SearchLayout>{page}</SearchLayout>

export default SearchPage

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      // Will be passed to the page component as props
    },
  }
}

import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { SearchLayout } from '@acter/components/layout/search'
import { Search } from '@acter/components/search'

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

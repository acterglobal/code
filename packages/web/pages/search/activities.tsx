import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/layout/head'
import { Search } from '@acter/components/search'
import { SearchLayout } from '@acter/components/search/layout'

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

export default SearchActivitiesPage

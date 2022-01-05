import React from 'react'

import { NextPageWithLayout } from 'pages/_app'

import { Head } from '@acter/components/atoms/head'
import { SearchLayout } from '@acter/components/layout/search'
import { Search } from '@acter/components/search'

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

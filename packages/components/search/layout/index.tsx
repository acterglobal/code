import React, { FC } from 'react'

import { SearchVariablesProvider } from '@acter/components/contexts/search-variables'
import { Layout } from '@acter/components/layout'
import { SearchMenu } from '@acter/components/search/layout/menu'

export const SearchLayout: FC = ({ children }) => (
  <SearchVariablesProvider>
    <Layout secondarySidebar={() => <SearchMenu />}>{children}</Layout>
  </SearchVariablesProvider>
)

import React, { FC } from 'react'

import { SearchVariablesProvider } from '@acter/components/contexts/search-variables'
import { OverallLayout } from '@acter/components/layout/overall'
import { SearchMenu } from '@acter/components/organisms/search/menu'

export const SearchLayout: FC = ({ children }) => (
  <SearchVariablesProvider>
    <OverallLayout secondarySidebar={() => <SearchMenu />}>
      {children}
    </OverallLayout>
  </SearchVariablesProvider>
)

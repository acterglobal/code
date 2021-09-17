import React, { FC } from 'react'

import { Layout } from '@acter/components/layout'
import { SearchMenu } from '@acter/components/search/layout/menu'

export const SearchLayout: FC = ({ children }) => (
  <Layout secondarySidebar={() => <SearchMenu />}>{children}</Layout>
)

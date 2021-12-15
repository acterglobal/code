import React, { FC } from 'react'

import { ActerMenu } from '@acter/components/acter/layout/menu'
import { OverallLayout } from '@acter/components/layout/overall'

export const ActerLayout: FC = ({ children }) => (
  <OverallLayout secondarySidebar={() => <ActerMenu />}>
    {children}
  </OverallLayout>
)

import React, { FC } from 'react'

import { ActerMenu } from '@acter/components/acter/layout/menu'
import { CurrentActerProvider } from '@acter/components/contexts/current-acter-variables'
import { OverallLayout } from '@acter/components/layout/overall'

export const ActerLayout: FC = ({ children }) => (
  <CurrentActerProvider>
    <OverallLayout secondarySidebar={() => <ActerMenu />}>
      {children}
    </OverallLayout>
  </CurrentActerProvider>
)

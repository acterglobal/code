import React, { FC } from 'react'

import { OverallLayout } from '@acter/components/layout/overall'
import { ProfileMenu } from '@acter/components/user/profile/layout/menu'

export const ProfileLayout: FC = ({ children }) => (
  <OverallLayout secondarySidebar={() => <ProfileMenu />}>
    {children}
  </OverallLayout>
)

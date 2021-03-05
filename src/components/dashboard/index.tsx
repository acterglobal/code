import React, { FC } from 'react'
import { flattenFollowing } from 'src/lib/acter/flatten-following'
import { ActerListByType } from 'src/components/acter/list-by-type'

import { User } from '@generated/type-graphql'

export interface DashboardProps {
  user: User
}

export const Dashboard: FC<DashboardProps> = ({ user }) => {
  return <ActerListByType acters={flattenFollowing(user.Acter)} />
}

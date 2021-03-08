import React, { FC } from 'react'
import { flattenFollowing } from 'src/lib/acter/flatten-following'
import { ActerListByType } from 'src/components/acter/list-by-type'
import { DefaultMessage } from 'src/components/dashboard/default-message'

import { User } from '@generated/type-graphql'

export interface DashboardProps {
  user: User
}

export const Dashboard: FC<DashboardProps> = ({ user }) => {
  const acters = flattenFollowing(user.Acter)
  if (acters.length === 0) {
    return <DefaultMessage />
  }
  return <ActerListByType acters={flattenFollowing(user.Acter)} />
}

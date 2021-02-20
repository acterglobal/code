import React, { FC } from 'react'

import { ActerListByType } from 'src/components/acter/list-by-type'

import { Acter } from '@generated/type-graphql'

export interface DashboardProps {
  acters: Acter[]
}

export const Dashboard: FC<DashboardProps> = ({ acters }) => (
  <ActerListByType acters={acters} />
)

import React, { FC } from 'react'

import { Interest, InterestType } from '@generated/type-graphql'

export interface ApproachListProps {
  type: InterestType
  interests: Interest[]
}

export const ApproachList: FC<ApproachListProps> = () => {
  return <div></div>
}

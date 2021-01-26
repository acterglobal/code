import React, { FC } from 'react'

import { Interest, InterestType } from '@generated/type-graphql'

import { Approach } from 'src/components/interests/approach'

export interface ApproachListProps {
  type: InterestType
  interests: Interest[]
}

export const ApproachList: FC<ApproachListProps> = ({ interests }) => {
  return (
    <>
      {interests.map((interest) => (
        <Approach interest={interest} key={`interest-${interest.id}`} />
      ))}
    </>
  )
}

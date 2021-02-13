import React, { FC } from 'react'
import { InterestType } from '@generated/type-graphql'
import Interest from './interest'

export interface typesProps {
  type: InterestType
  allTypes: InterestType[]
}

const InterestTypes: FC<typesProps> = ({ type, allTypes }) => {
  const subTypes = allTypes.filter(
    (subtype) => type.id === subtype.parentInterestTypeId
  )

  if (subTypes.length > 0) {
    return (
      <>
        {subTypes.map((subType) => (
          <InterestTypes key={subType.id} type={subType} allTypes={subTypes} />
        ))}
      </>
    )
  } else {
    return (
      <>
        {type.Interests.map((interest) => (
          <Interest key={interest.id} interest={interest} type={type.name} />
        ))}
      </>
    )
  }
}

export default InterestTypes

import React, { FC } from 'react'
import { InterestType } from '@generated/type-graphql'
import Interest from './interest'

export interface typesProps {
  types: {
    type: InterestType
    allTypes: InterestType[]
  }
}

const InterestTypes: FC<typesProps> = ({ types }) => {
  const { type, allTypes } = types

  const subTypes = allTypes.filter(
    (subtype) => type.id === subtype.parentInterestTypeId
  )

  if (subTypes.length > 0) {
    return subTypes.map((type) => (
      <InterestTypes key={type.id} types={{ type, allTypes }} />
    ))
  } else {
    return type.Interests.map((interest) => (
      <Interest key={interest.id} interest={interest} type={type.name} />
    ))
  }

  //   return (
  //     <>
  //       {subTypes.length > 0
  //         ? subTypes.map((type) => (
  //             <InterestTypes key={type.id} types={{ type, allTypes }} />
  //           ))
  //         : type.Interests.map((interest) => (
  //             <Interest key={interest.id} interest={interest} type={type.name} />
  //           ))}
  //     </>
  //   )
}

export default InterestTypes

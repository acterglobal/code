import React, { FC } from 'react'
import { InterestType } from '@generated/type-graphql'
import { Interest } from './interest'

interface selectedInterest {
  id: string
  name: string
  type: string
}

export interface TypesProps {
  type: InterestType
  allTypes: InterestType[]
  onSelectedInterestsChange?: ({ interest: InterestType, type: string }) => void
  selectedInterests?: selectedInterest[]
}

export const InterestTypes: FC<TypesProps> = ({
  type,
  allTypes,
  onSelectedInterestsChange,
  selectedInterests,
}) => {
  const subTypes = allTypes.filter(
    (subtype) => type.id === subtype.parentInterestTypeId
  )

  if (subTypes.length > 0) {
    return (
      <>
        {subTypes.map((subType) => (
          <InterestTypes
            key={subType.id}
            type={subType}
            allTypes={subTypes}
            onSelectedInterestsChange={onSelectedInterestsChange}
            selectedInterests={selectedInterests}
          />
        ))}
      </>
    )
  } else {
    return (
      <>
        {type.Interests.map((interest) => {
          return (
            <Interest
              key={interest.id}
              interest={interest}
              type={type.name}
              onSelectedInterestsChange={onSelectedInterestsChange}
              selected={
                selectedInterests &&
                selectedInterests.some(
                  (selectedInterest) => selectedInterest.id === interest.id
                )
              }
              disabled={
                selectedInterests &&
                selectedInterests.filter(
                  (selectedInterest) => selectedInterest.type === type.name
                ).length >= 5
              }
            />
          )
        })}
      </>
    )
  }
}

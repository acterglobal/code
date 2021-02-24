import React, { FC } from 'react'
import { InterestType } from '@generated/type-graphql'
import { Interest } from 'src/components/interests/interest'

export interface InterestTypesProps {
  type: InterestType
  allTypes: InterestType[]
  selectedInterests?: string[]
  selectedTypes?: string[]
  disabled?: boolean
  onSelectedInterestsChange?: (interest: string, type: string) => void
}

export const InterestTypes: FC<InterestTypesProps> = ({
  type,
  allTypes,
  onSelectedInterestsChange,
  selectedInterests,
  selectedTypes,
  disabled,
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
            selectedTypes={selectedTypes}
            disabled={
              selectedTypes &&
              selectedTypes.filter(
                (selectedType) =>
                  selectedType === 'Economy' ||
                  selectedType === 'Environment' ||
                  selectedType === 'Social'
              ).length >= 5
            }
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
                selectedInterests && selectedInterests.includes(interest.id)
              }
              disabled={
                disabled ||
                (selectedTypes &&
                  selectedTypes.filter(
                    (selectedType) => selectedType === type.name
                  ).length >= 5)
              }
            />
          )
        })}
      </>
    )
  }
}

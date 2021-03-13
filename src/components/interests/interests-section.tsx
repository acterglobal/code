import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { InterestTypes } from 'src/components/interests/interest-types'
import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'
import { InterestType, Interest } from '@schema'

export const getSelectedInterests = (
  interestTypes: InterestType[],
  selected: Interest[]
): InterestType[] => {
  if (selected?.length) {
    const selectedMap = selected.reduce((prev, { id }) => ({
      ...prev,
      [id]: true,
    }))
    return interestTypes.map((type) => {
      return {
        ...type,
        Interests: type.Interests.filter(
          ({ id }) => typeof selectedMap[id] !== 'undefined'
        ),
      }
    })
  }

  return interestTypes
}

export interface InterestsSectionProps {
  interestTypes: InterestType[]
  selected?: Interest[]
  columns?: boolean
}

export const InterestsSection: FC<InterestsSectionProps> = ({
  interestTypes,
  selected,
  columns,
}) => {
  const typesWithSelectedInterests = getSelectedInterests(
    interestTypes,
    selected
  )
  const topLevelTypes = getTopLevelTypes(typesWithSelectedInterests)

  return (
    <>
      {topLevelTypes.map((type) => (
        <Box role="interests-section" key={type.id}>
          <Typography id="interest-type-name" style={{ margin: 5 }}>
            {type.name}
          </Typography>
          <InterestTypes
            type={type}
            allTypes={typesWithSelectedInterests}
            onSelectedInterestsChange={() => null}
            columns={columns}
            showSubTypeTitles={false}
          />
        </Box>
      ))}
    </>
  )
}

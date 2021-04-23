import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { InterestTypes } from 'src/components/interests/interest-types'
import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'
import { getSelectedInterests } from 'src/lib/interests/get-selected-interests'
import { InterestType, Interest } from '@schema'
export interface InterestsSectionProps {
  interestTypes: InterestType[]
  selected?: Interest[]
  columns?: boolean
}

export const InterestsSection: FC<InterestsSectionProps> = (props) => {
  const { interestTypes, selected, columns } = props
  const typesWithSelectedInterests = getSelectedInterests(
    interestTypes,
    selected
  )
  const topLevelTypes = getTopLevelTypes(typesWithSelectedInterests)

  return (
    <>
      {topLevelTypes.map((type) => (
        <Box role="interests-section" key={type.id}>
          <Typography
            id="interest-type-name"
            variant="body2"
            style={{ margin: 5, fontWeight: 600 }}
          >
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

import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { InterestTypes } from 'src/components/interests/interest-types'
import {
  getSelectedTopLevelTypes,
  getSelectedInterests,
} from 'src/lib/interests'
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
  const selectedTopLevel = getSelectedTopLevelTypes(
    typesWithSelectedInterests,
    selected
  )

  return (
    <>
      {selectedTopLevel.map((type) => (
        <Box key={type.id} role="list">
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

import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { InterestTypes } from '@acter/components/interests/interest-types'
import { Size } from '@acter/lib/constants'
import {
  getSelectedTopLevelTypes,
  getSelectedInterests,
} from '@acter/lib/interests'
import { useInterestTypes } from '@acter/lib/interests/use-interest-types'
import { capitalize } from '@acter/lib/string/capitalize'
import { Interest } from '@acter/schema'

export interface InterestsSectionProps {
  selected?: Interest[]
}

export const InterestsSection: FC<InterestsSectionProps> = ({ selected }) => {
  const { interestTypes, fetching: interestTypesLoading } = useInterestTypes()

  if (interestTypesLoading) return <LoadingSpinner />
  if (!interestTypes) return null

  const typesWithSelectedInterests = getSelectedInterests(
    interestTypes,
    selected
  )
  const selectedTopLevel = getSelectedTopLevelTypes(
    typesWithSelectedInterests,
    selected
  )

  return (
    <Box style={{ display: 'flex' }}>
      {selectedTopLevel.map((type) => (
        <Box key={type.id} role="list">
          <Typography
            id="interest-type-name"
            style={{ marginLeft: 4, fontWeight: 600 }}
          >
            {capitalize(type.name)}
          </Typography>
          <InterestTypes
            type={type}
            chipSize={Size.SMALL}
            allTypes={typesWithSelectedInterests}
            onSelectedInterestsChange={() => null}
            columns={true}
            showSubTypeTitles={false}
          />
        </Box>
      ))}
    </Box>
  )
}

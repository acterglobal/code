import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { InterestTypes } from 'src/components/interests/interest-types'
import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'

import { InterestType } from '@generated/type-graphql'

export interface InterestsSectionProps {
  interestTypes: InterestType[]
}

const InterestsSection: FC<InterestsSectionProps> = ({ interestTypes }) => {
  const topLevelTypes = getTopLevelTypes(interestTypes)

  return (
    <Box style={{ display: 'flex' }}>
      {topLevelTypes.map((type) => (
        <Box role="interests-section" key={type.id}>
          <Typography id="interest-type-name" style={{ margin: 5 }}>
            {type.name}
          </Typography>
          <InterestTypes type={type} allTypes={interestTypes} />
        </Box>
      ))}
    </Box>
  )
}

export default InterestsSection

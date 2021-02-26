import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { Interests } from 'src/__fixtures__/interest/interests'
import { InterestTypes } from 'src/components/interests/interest-types'
import { getTopLevelTypes } from 'src/lib/interests/get-toplevel-types'

export const InterestsSection: FC = () => {
  const topLevelTypes = getTopLevelTypes()

  return (
    <Box style={{ display: 'flex' }}>
      {topLevelTypes.map((type) => (
        <Box role="interests-section" key={type.id}>
          <Typography id="interest-type-name" style={{ margin: 5 }}>
            {type.name}
          </Typography>
          <InterestTypes type={type} allTypes={Interests.data.interestTypes} />
        </Box>
      ))}
    </Box>
  )
}

import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { Interests } from '../../__fixtures__/interest/interests'
import { InterestTypes } from './interest-types'
import { getTopLevelTypes } from '../../lib/interests/get-toplevel-types'

const InterestsSection: FC = () => {
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

export default InterestsSection

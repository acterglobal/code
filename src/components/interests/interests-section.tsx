import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { Interests } from '../../__fixtures__/interest/interests'
import InterestTypes from './interest-types'

const InterestsSection: FC = () => {
  const rootType = Interests.data.interestTypes.find(
    (type) => type.name === 'root'
  )
  if (!rootType) {
    //TODO: handle error
  }
  const topLevelTypes = Interests.data.interestTypes.filter(
    (type) => type.parentInterestTypeId === rootType.id
  )

  return (
    <Box style={{ display: 'flex' }}>
      {topLevelTypes.map((type) => (
        <Box key={type.id}>
          <Typography style={{ margin: 5 }}>{type.name}</Typography>
          <InterestTypes
            types={{ type: type, allTypes: Interests.data.interestTypes }}
          />
        </Box>
      ))}
    </Box>
  )
}

export default InterestsSection

import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { InterestType } from '@generated/type-graphql'
import InterestSubTypes from './interest-sub-types'
import Interest from './interest'

export interface typesProps {
  types: {
    type: InterestType
    allTypes: any
  }
}

const InterestTypes: FC<typesProps> = ({ types }) => {
  const { type, allTypes } = types

  const subTypes = allTypes.filter(
    (subtype) => type.id === subtype.parentInterestTypeId
  )

  return (
    <Box>
      <Typography style={{ margin: 5 }}>{type.name}</Typography>
      {subTypes.length > 0
        ? subTypes.map((subType) => (
            <InterestSubTypes key={subType.id} interest={subType} />
          ))
        : type.Interests.map((interest) => (
            <Interest
              key={interest.id}
              interest={interest}
              outline={type.name === 'Tags' ? 'outlined' : 'default'}
            />
          ))}
    </Box>
  )
}

export default InterestTypes

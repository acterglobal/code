import React, { FC } from 'react'
import { InterestType } from '@generated/type-graphql'
import { Box, Chip } from '@material-ui/core'

export interface InterestProps {
  interest: InterestType
  extraStyles?: object
  outline?: any
}

const Interest: FC<InterestProps> = ({ interest, extraStyles, outline }) => {
  return (
    <Box style={{ margin: 5 }}>
      <Chip
        key={interest.id}
        label={interest.name}
        style={{ ...extraStyles, width: 150 }}
        size="small"
        variant={outline}
      />
    </Box>
  )
}

export default Interest

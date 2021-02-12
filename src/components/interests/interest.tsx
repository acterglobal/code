import React, { FC } from 'react'
import { InterestType } from '@generated/type-graphql'
import { Box, Chip } from '@material-ui/core'

export const interestColors = {
  Economy: 'rgb(248, 186, 0)',
  Environment: 'rgb(29, 177, 0)',
  Social: 'rgb(255, 100, 78)',
}

export interface InterestProps {
  interest: InterestType
  type: string
}

const Interest: FC<InterestProps> = ({ interest, type }) => {
  let backgroundColor = {}
  let variant = {}

  switch (type) {
    case 'Economy':
    case 'Environment':
    case 'Social':
      backgroundColor = { backgroundColor: interestColors[type] }
      break

    case 'Tags':
      variant = { variant: 'outlined' }
      break

    default:
      break
  }

  return (
    <Box style={{ margin: 5 }}>
      <Chip
        key={interest.id}
        label={interest.name}
        style={{ ...backgroundColor, width: 150, fontSize: '0.8rem' }}
        size="small"
        {...variant}
      />
    </Box>
  )
}

export default Interest

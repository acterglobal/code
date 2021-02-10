import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import Interest from './interest'
import { InterestProps } from './interest'

const chipColors = {
  Economy: 'rgb(248, 186, 0)',
  Environment: 'rgb(29, 177, 0)',
  Social: 'rgb(255, 100, 78)',
}

const InterestSubTypes: FC<InterestProps> = ({ interest }) => {
  const { name: interestType, Interests } = interest

  return (
    <Box>
      {Interests.map((interest) => (
        <Interest
          key={interest.id}
          extraStyles={{
            backgroundColor: chipColors[interestType],
            color: 'white',
          }}
          interest={interest}
        />
      ))}
    </Box>
  )
}

export default InterestSubTypes

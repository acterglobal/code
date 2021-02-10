import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Box } from '@material-ui/core'
import { Interests } from '../../__fixtures__/interest/interests'
import InterestTypes from './interest-types'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
  },
}))

const InterestsSection = () => {
  const classes = useStyles()

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
    <Box className={classes.container}>
      {topLevelTypes.map((type) => (
        <InterestTypes
          key={type.id}
          types={{ type: type, allTypes: Interests.data.interestTypes }}
        />
      ))}
    </Box>
  )
}

export default InterestsSection

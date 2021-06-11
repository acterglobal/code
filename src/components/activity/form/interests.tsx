import React, { FC } from 'react'
import { Box, InputLabel } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { InterestType } from '@schema'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: 600,
    },
    label: {
      color: grey[700],
      marginBottom: 10,
      fontSize: '0.9rem',
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)

export interface InterestsStepProps {
  interestTypes: InterestType[]
  initialValues: string[]
}

export const InterestsStep: FC<InterestsStepProps> = ({ interestTypes }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <InputLabel className={classes.label}>Choose interests</InputLabel>
      <Box>
        <InterestsAddSection interestTypes={interestTypes} />
      </Box>
    </Box>
  )
}

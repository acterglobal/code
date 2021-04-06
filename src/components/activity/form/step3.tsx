import React, { FC } from 'react'
import { Box, InputLabel } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { InterestType } from '@schema'
import { FormSetFieldValue } from 'src/components/acter/form'

const useStyles = makeStyles(
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
      fontWeight: 'bold',
    },
  })
)

export interface Step3Props {
  interestTypes: InterestType[]
  setFieldValue: FormSetFieldValue
  initialValues: string[]
}

export const Step3: FC<Step3Props> = ({
  interestTypes,
  setFieldValue,
  initialValues,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <InputLabel className={classes.label}>Choose interests</InputLabel>
      <Box>
        <InterestsAddSection
          interestTypes={interestTypes}
          setFieldValue={setFieldValue}
          initialValues={initialValues}
        />
      </Box>
    </Box>
  )
}

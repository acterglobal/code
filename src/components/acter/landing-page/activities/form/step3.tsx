import React, { FC } from 'react'
import { Box, InputLabel } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { InterestType } from '@generated/type-graphql'
import { FormikSetFieldType } from 'src/components/acter/landing-page/activities/form'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    color: grey[700],
    marginBottom: 10,
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
}))

export interface Step3Props {
  interestTypes: InterestType[]
  setFieldValue: FormikSetFieldType
}

export const Step3: FC<Step3Props> = ({ interestTypes, setFieldValue }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <InputLabel className={classes.label}>Choose interests</InputLabel>
      <Box>
        <InterestsAddSection
          interestTypes={interestTypes}
          setFieldValue={setFieldValue}
        />
      </Box>
    </Box>
  )
}

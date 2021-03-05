import React, { FC } from 'react'
import { Box, Typography } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { DatePickerField } from 'src/components/util/pickers/date-picker-field'
import { TimePickerField } from 'src/components/util/pickers/time-picker-field'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { makeStyles, Theme } from '@material-ui/core/styles'
import MomentUtils from '@date-io/moment'
import {
  SelectOrganiser,
  SelectOrganiserProps,
} from 'src/components/activities/form/select-organiser'
import { Acter } from '@generated/type-graphql'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: grey[800],
  },
  chooseOrganiser: {
    marginBottom: 95,
    borderBottomColor: 'red',
  },
  organiser: {
    height: 80,
    backgroundColor: 'blue',
  },
  textinput: {
    fontSize: '0.5rem',
    marginBottom: 15,
    color: theme.palette.secondary.light,
  },
  datetimeSection: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  pickerfield: {
    width: 240,
  },
}))

export type Step1Props = SelectOrganiserProps

export const Step1: FC<Step1Props> = ({ acters }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h5">
        + Add Activity
      </Typography>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <SelectOrganiser acters={acters} />

        <Field
          className={classes.textinput}
          component={TextField}
          variant="outlined"
          label="Name of the Activity"
          name="name"
          required={true}
        />

        <Box className={classes.datetimeSection}>
          <Box className={classes.pickerfield}>
            <DatePickerField
              placeholder="Start Date"
              name="startDate"
              required={true}
            />
          </Box>
          <Box className={classes.pickerfield}>
            <TimePickerField
              placeholder="Start Time"
              name="startTime"
              required={true}
            />
          </Box>
        </Box>

        <Box className={classes.datetimeSection}>
          <Box className={classes.pickerfield}>
            <DatePickerField
              placeholder="End Date"
              name="endDate"
              required={true}
            />
          </Box>
          <Box className={classes.pickerfield}>
            <TimePickerField
              placeholder="End Time"
              name="endTime"
              required={true}
            />
          </Box>
        </Box>
      </MuiPickersUtilsProvider>
    </Box>
  )
}

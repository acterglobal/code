import React, { FC } from 'react'
import { Box, Grid, Typography, Paper } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { DatePickerField } from 'src/components/util/pickers/date-picker-field'
import { TimePickerField } from 'src/components/util/pickers/time-picker-field'
import { Field } from 'formik'
import { TextField, CheckboxWithLabel } from 'formik-material-ui'
import { makeStyles, Theme } from '@material-ui/core/styles'
import MomentUtils from '@date-io/moment'
import {
  SelectOrganiser,
  SelectOrganiserProps,
} from 'src/components/activity/form/select-organiser'
import { grey } from '@material-ui/core/colors'
import moment from 'moment'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
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
    // marginBottom: 15,
  },

  pickerfield: {
    width: 240,
  },
  paper: {},
}))

export interface Step1Props extends SelectOrganiserProps {
  values: any
}

export const Step1: FC<Step1Props> = ({ acters, values }) => {
  const classes = useStyles()

  if (values.wholeDay === true) {
    values.endTime = moment('23.59', 'hh:mm')
    values.startTime = moment('00.00', 'hh:mm')
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Box className={classes.container}>
        <Typography className={classes.heading} variant="h5">
          + Add Activity
        </Typography>
        <SelectOrganiser acters={acters} />

        <Field
          className={classes.textinput}
          component={TextField}
          variant="outlined"
          label="Name of the Activity"
          name="name"
          required={true}
        />

        <Grid container style={{ width: 500 }} spacing={2}>
          <Grid item xs={6}>
            <DatePickerField
              placeholder="Start Date"
              name="startDate"
              required={true}
            />
          </Grid>
          {!values.wholeDay && (
            <Grid item xs={6}>
              <TimePickerField
                placeholder="Start Time"
                name="startTime"
                required={true}
              />
            </Grid>
          )}

          <Grid item xs={6}>
            <DatePickerField
              placeholder="End Date"
              name="endDate"
              required={true}
            />
          </Grid>
          {!values.wholeDay && (
            <Grid item xs={6}>
              <TimePickerField
                placeholder="End Time"
                name="endTime"
                required={true}
              />
            </Grid>
          )}
        </Grid>
        <Field
          component={CheckboxWithLabel}
          type="checkbox"
          name="wholeDay"
          Label={{ label: 'whole day activity', style: { color: grey[700] } }}
          inputProps={{ 'aria-label': 'all day activity' }}
        />
      </Box>
    </MuiPickersUtilsProvider>
  )
}

import React, { FC } from 'react'
import { Box, Grid } from '@material-ui/core'
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
import { FormValues } from 'src/components/acter/form'
import { SelectActivityType } from 'src/components/activity/form/select-activity-type'
import { ActivityType } from '@schema'

export interface Step1Props extends SelectOrganiserProps {
  values: FormValues
  activityTypes: ActivityType[]
}

export const Step1: FC<Step1Props> = ({ acters, values, activityTypes }) => {
  const classes = useStyles()

  if (values.isAllDay === true) {
    values.endTime = moment('23.59', 'hh:mm')
    values.startTime = moment('00.00', 'hh:mm')
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Box className={classes.container}>
        <SelectOrganiser acters={acters} />

        <Field
          className={classes.textinput}
          component={TextField}
          variant="outlined"
          label="Name of the Activity"
          name="name"
          required={true}
        />

        <Grid container>
          <Grid item xs={6} className={classes.item}>
            <SelectActivityType activityTypes={activityTypes} />
            <DatePickerField
              placeholder="Start Date"
              name="startDate"
              required={true}
            />
          </Grid>
          {!values.isAllDay && (
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
          {!values.isAllDay && (
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
          name="isAllDay"
          Label={{ label: 'All day activity', style: { color: grey[700] } }}
          inputProps={{ 'aria-label': 'all day activity' }}
        />
      </Box>
    </MuiPickersUtilsProvider>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
  },
  heading: {
    fontWeight: theme.typography.fontWeightBold,
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
  item: {
    marginBottom: 15,
  },
}))

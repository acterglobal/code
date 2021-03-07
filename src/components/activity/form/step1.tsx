import React, { FC } from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
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
} from 'src/components/activity/form/select-organiser'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
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

        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <DatePickerField
                  placeholder="Start Date"
                  name="startDate"
                  required={true}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePickerField
                  placeholder="Start Time"
                  name="startTime"
                  required={true}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={6}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <DatePickerField
                  placeholder="end Date"
                  name="endDate"
                  required={true}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TimePickerField
                  placeholder="End Time"
                  name="endTime"
                  required={true}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </Box>
  )
}

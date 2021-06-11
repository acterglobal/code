import React, { FC, useState } from 'react'
import { Moment } from 'moment'
import { Box } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Field, useFormikContext } from 'formik'
import { TextField } from 'formik-material-ui'
import { makeStyles, Theme } from '@material-ui/core/styles'
import MomentUtils from '@date-io/moment'
import {
  SelectOrganiser,
  SelectOrganiserProps,
} from 'src/components/activity/form/fields/select-organiser'
import moment from 'moment'
import { SelectActivityType } from 'src/components/activity/form/fields/select-activity-type'
import {
  LocationVenuePicker,
  LocationVenuePickerValues,
} from 'src/components/activity/form/fields/location-venue-picker'
import {
  StartEndTimeDatePicker,
  StartEndTimeDatePickerValues,
} from 'src/components/activity/form/fields/start-end-date-time-picker'
import { ActivityType } from '@schema'

export interface BasicsStepProps extends SelectOrganiserProps {
  activityTypes: ActivityType[]
}

export interface BasicsStepValues
  extends LocationVenuePickerValues,
    StartEndTimeDatePickerValues {
  id?: string
  organiserActerId: string
  activityTypeId: string
  isAllDay: boolean
  startTime: Moment
  endTime: Moment
}

export const BasicsStep: FC<BasicsStepProps> = ({ acters, activityTypes }) => {
  const classes = useStyles()
  const { values } = useFormikContext<BasicsStepValues>()
  const [selectedTypeId, setSelectedTypeId] = useState(values.activityTypeId)

  const handleSelectedType = (typeId: string) => {
    setSelectedTypeId(typeId)
    values.activityTypeId = typeId
  }

  if (values.isAllDay === true) {
    values.endTime = moment('23.59', 'hh:mm')
    values.startTime = moment('00.00', 'hh:mm')
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Box className={classes.container}>
        <Box className={classes.section}>
          <SelectOrganiser acters={acters} />
        </Box>

        <Box className={classes.section}>
          <Field
            className={classes.textinput}
            fullWidth
            component={TextField}
            variant="outlined"
            label="Name of the Activity"
            name="name"
            required={true}
          />
        </Box>

        {values.id && (
          <Box className={classes.section}>
            <SelectActivityType
              activityTypes={activityTypes}
              selectedTypeId={selectedTypeId}
              onChange={handleSelectedType}
            />
          </Box>
        )}
        <Box className={classes.section}>
          <StartEndTimeDatePicker />
        </Box>

        <Box className={classes.section}>
          <LocationVenuePicker />
        </Box>
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
  section: {
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  textinput: {
    fontSize: '0.5rem',
    marginBottom: 15,
    color: theme.palette.secondary.light,
  },
}))

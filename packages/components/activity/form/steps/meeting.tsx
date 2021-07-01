import React, { FC, useState } from 'react'
import { Moment } from 'moment'
import { Box } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Field, useFormikContext } from 'formik'
import { TextField } from 'formik-material-ui'
import { makeStyles, Theme } from '@material-ui/core/styles'
import MomentUtils from '@date-io/moment'
import { SelectActivityType } from '@acter/components/activity/form/fields/select-activity-type'
import {
  LocationVenuePicker,
  LocationVenuePickerValues,
} from '@acter/components/activity/form/fields/location-venue-picker'
import {
  StartEndTimeDatePicker,
  StartEndTimeDatePickerValues,
} from '@acter/components/activity/form/fields/start-end-date-time-picker'
import { FormSection } from '@acter/components/styled/form-section'
import { ActivityType } from '@acter/schema/types'
import { TextEditor } from '@acter/components/util/text-editor'

export interface MeetingStepProps {
  activityTypes: ActivityType[]
}

export interface MeetingStepValues
  extends LocationVenuePickerValues,
    StartEndTimeDatePickerValues {
  id?: string
  organiserActerId: string
  activityTypeId: string
  isAllDay: boolean
  startTime: Moment
  endTime: Moment
  description: string
}

export const MeetingStep: FC<MeetingStepProps> = ({ activityTypes }) => {
  const classes = useStyles()
  const { values, setFieldValue } = useFormikContext<MeetingStepValues>()
  const [selectedTypeId, setSelectedTypeId] = useState(values.activityTypeId)
  const [editor, setEditor] = useState(null)

  const handleSelectedType = (typeId: string) => {
    setSelectedTypeId(typeId)
    values.activityTypeId = typeId
  }

  const handleInputChange = (value) => setFieldValue('description', value)

  const handleEditorRef = (editorRef) => setEditor(editorRef)

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Box className={classes.container}>
        <FormSection>
          <Field
            className={classes.textinput}
            fullWidth
            component={TextField}
            variant="outlined"
            label="Name of the Activity"
            name="name"
            required={true}
          />
        </FormSection>

        {values.id && (
          <FormSection>
            <SelectActivityType
              activityTypes={activityTypes}
              selectedTypeId={selectedTypeId}
              onChange={handleSelectedType}
            />
          </FormSection>
        )}
        <FormSection>
          <StartEndTimeDatePicker hideIsAllDayCheckBox />
        </FormSection>

        <FormSection>
          <LocationVenuePicker />
        </FormSection>

        <FormSection onClick={() => editor.focus()}>
          <TextEditor
            height={118}
            initialValue={values.description}
            // @ts-ignore
            handleInputChange={handleInputChange}
            editorRef={handleEditorRef}
          />
        </FormSection>
        <FormSection></FormSection>
      </Box>
    </MuiPickersUtilsProvider>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    padding: 4,
  },

  textinput: {
    fontSize: '0.5rem',
    marginBottom: 15,
    color: theme.palette.secondary.light,
  },
}))

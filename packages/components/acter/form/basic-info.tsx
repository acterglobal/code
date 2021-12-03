import React, { FC, useState } from 'react'

import { Box, InputLabel } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Field, useFormikContext } from 'formik'
import { TextField } from 'formik-material-ui'

import { ActerTypePicker } from '@acter/components/atoms/fields/acter-type-picker'
import { LocationPicker } from '@acter/components/atoms/fields/location-picker'
import { TextEditor } from '@acter/components/util/text-editor'

export interface BasicInformationValues {
  acterTypeId: string
  name: string
  description: string
  location: string
  url: string
}

export const BasicInformation: FC = () => {
  const classes = useStyles()
  const [editor, setEditor] = useState(null)
  const { values, setFieldValue } = useFormikContext<BasicInformationValues>()

  return (
    <Box className={classes.wrapper}>
      <ActerTypePicker className={classes.textInput} />
      <Field
        fullWidth
        className={classes.textInput}
        component={TextField}
        label="Name"
        name="name"
        required={true}
      />
      <Box mb={1} className={classes.textEditor} onClick={() => editor.focus()}>
        <InputLabel style={{ marginBottom: 5 }}>Description</InputLabel>
        <TextEditor
          height={150}
          initialValue={values.description}
          // @ts-ignore
          handleInputChange={(value) => setFieldValue('description', value)}
          editorRef={(editorRef) => setEditor(editorRef)}
        />
      </Box>

      <LocationPicker
        className={classes.textInput}
        fullWidth
        TextFieldProps={{ variant: 'standard' }}
      />

      <Field
        fullWidth
        className={classes.textInput}
        component={TextField}
        label="Website link"
        name="url"
      />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      width: '90%',
    },
    textEditor: {
      width: '99%',
    },
    textInput: {
      fontSize: '0.5rem',
      marginBottom: theme.spacing(3),
      color: theme.palette.secondary.light,
    },
  })
)

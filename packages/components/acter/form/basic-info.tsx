import React, { FC, useState } from 'react'

import { Box, InputLabel, Typography } from '@material-ui/core'
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
      <Typography className={classes.heading}>
        Create an Actor to start coordinating or collaborating
      </Typography>

      <ActerTypePicker
        size="small"
        variant="outlined"
        fullWidth
        className={classes.field}
      />

      <Field
        className={classes.field}
        component={TextField}
        variant="outlined"
        size="small"
        fullWidth
        label="Name"
        name="name"
        required={true}
      />
      <Box mb={2} className={classes.textEditor} onClick={() => editor.focus()}>
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
        className={classes.field}
        fullWidth
        TextFieldProps={{ variant: 'standard' }}
      />

      <Field
        className={classes.field}
        component={TextField}
        variant="outlined"
        size="small"
        fullWidth
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
    heading: {
      textAlign: 'center',
      marginBottom: theme.spacing(2),
      color: theme.colors.grey.dark,
      fontWeight: theme.typography.fontWeightLight,
    },
    textEditor: {
      width: '99%',
    },
    field: {
      fontSize: '0.5rem',
      marginBottom: theme.spacing(2),
      color: theme.palette.secondary.light,
    },
  })
)

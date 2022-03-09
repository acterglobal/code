import React, { FC, useState } from 'react'

import { Box, InputLabel, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Field, useFormikContext } from 'formik'
import { TextField } from 'formik-material-ui'

import {
  ActerTypePicker,
  ActerTypePickerValues,
} from '@acter/components/atoms/fields/acter-type-picker'
import { LocationPicker } from '@acter/components/atoms/fields/location-picker'
import { TextEditor } from '@acter/components/util/text-editor'
import { useTranslation } from '@acter/lib/i18n/use-translation'

export interface BasicInformationValues extends ActerTypePickerValues {
  name: string
  description: string
  location: string
  url: string
}

export const BasicInformation: FC = () => {
  const classes = useStyles()
  const { t } = useTranslation('common')
  const [editor, setEditor] = useState(null)
  const { values, setFieldValue } = useFormikContext<BasicInformationValues>()

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.heading}>
        {t('acterForm.heading')}
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
        label={t('acterForm.name')}
        name="name"
        required={true}
      />
      <Box mb={2} className={classes.textEditor} onClick={() => editor.focus()}>
        <InputLabel style={{ marginBottom: 5 }}>
          {t('acterForm.description')}
        </InputLabel>
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
        label={t('acterForm.websiteLink')}
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

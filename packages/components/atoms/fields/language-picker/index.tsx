import React, { FC } from 'react'

import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Field } from 'formik'
import { Select } from 'formik-material-ui'

import { LanguageNames } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'

export type LanguagePickerProps = FormControlProps

export interface ActerTypePickerValues {
  acterTypeId: string
}

export const LanguagePicker: FC<LanguagePickerProps> = (props) => {
  const classes = useStyles()

  return (
    <FormControl {...props}>
      <InputLabel>Language</InputLabel>
      <Field component={Select} label="Language" name="language">
        {Object.entries(LanguageNames).map(([language, languageName]) => (
          <MenuItem value={language} className={classes.item}>
            {capitalize(languageName)}
          </MenuItem>
        ))}
      </Field>
    </FormControl>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      color: theme.palette.secondary.main,
    },
  })
)

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

import { ActerLocales } from '@acter/lib/constants'

export type LanguagePickerProps = FormControlProps

export interface LanguagePickerValues {
  acterTypeId: string
}

export const LanguagePicker: FC<LanguagePickerProps> = (props) => {
  const classes = useStyles()

  return (
    <FormControl {...props}>
      <InputLabel>Change Language</InputLabel>
      <Field
        component={Select}
        label="Select Language"
        name="acterLanguageSetting"
        required={true}
      >
        {ActerLocales.map((locale) => (
          <MenuItem
            value={locale}
            // key={`type-${type.id}`}
            className={classes.acterLocaleItem}
          >
            {locale}
          </MenuItem>
        ))}
      </Field>
    </FormControl>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    acterLocaleItem: {
      color: theme.palette.secondary.main,
    },
  })
)

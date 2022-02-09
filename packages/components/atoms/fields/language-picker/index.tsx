import React, { FC, useEffect } from 'react'

import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Field, useFormikContext } from 'formik'
import { Select } from 'formik-material-ui'

import { useUpdateUserLanguage } from '@acter/lib/acter/use-update-user-language'
import { LanguageNames } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
import { useUser } from '@acter/lib/user/use-user'
import { Language } from '@acter/schema'

export type LanguagePickerProps = FormControlProps

export const LanguagePicker: FC<LanguagePickerProps> = (props) => {
  const classes = useStyles()
  const { setFieldValue } = useFormikContext()
  const { user } = useUser()
  const [_, updateLanguage] = useUpdateUserLanguage()

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    updateLanguage({
      email: user.email,
      language: evt.target.value as Language,
    })

    setFieldValue('language', evt.target.value)
  }

  useEffect(() => {
    setFieldValue('language', user?.language)
  }, [user?.language])

  return (
    <FormControl {...props}>
      <InputLabel>Language</InputLabel>
      <Field
        component={Select}
        label="Language"
        name="language"
        onChange={handleChange}
      >
        {/* TODO: replace language name with translation keys */}
        {Object.entries(LanguageNames).map(([language, languageName]) => (
          <MenuItem value={language as Language} className={classes.item}>
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

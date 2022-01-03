import React, { FC } from 'react'

import {
  FormControl,
  FormControlProps,
  InputLabel,
  MenuItem,
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Field, useFormikContext } from 'formik'
import { Select } from 'formik-material-ui'

import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { MainActerTypes, ActerTypes } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'

export type ActerTypePickerProps = FormControlProps

export interface ActerTypePickerValues {
  acterTypeId: string
}

export const ActerTypePicker: FC<ActerTypePickerProps> = (props) => {
  const classes = useStyles()
  const {
    values: { acterTypeId },
    setFieldValue,
  } = useFormikContext<ActerTypePickerValues>()
  const { acterTypes } = useActerTypes()

  const types = acterTypes.filter(({ name }) =>
    MainActerTypes.includes(name as ActerTypes)
  )

  const handleChange = (acterTypeId: string) => {
    setFieldValue('acterTypeId', acterTypeId)
  }

  return (
    <FormControl {...props}>
      <InputLabel>Select Acter Type</InputLabel>
      <Field
        component={Select}
        label="Select Acter Type"
        name="acterTypeId"
        required={true}
        initialValue={acterTypeId}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
          handleChange(evt.target.value)
        }
      >
        {types.map((type) => (
          <MenuItem
            value={type.id}
            key={`type-${type.id}`}
            className={classes.acterTypeItem}
          >
            {capitalize(type.name)}
          </MenuItem>
        ))}
      </Field>
    </FormControl>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    acterTypeItem: {
      color: theme.palette.secondary.main,
    },
  })
)

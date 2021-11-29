import React, { FC } from 'react'

import { Box, InputLabel, MenuItem, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Field, useFormikContext } from 'formik'
import { Select } from 'formik-material-ui'

import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'

const { ORGANISATION, NETWORK } = ActerTypes

export interface ActerTypePickerValues {
  acterTypeId: string
}

export const ActerTypePicker: FC = () => {
  const classes = useStyles()
  const { acterTypes } = useActerTypes()
  const { values, setFieldValue } = useFormikContext<ActerTypePickerValues>()

  const types = acterTypes.filter(({ name }) =>
    [ORGANISATION, NETWORK].includes(name as ActerTypes)
  )

  return (
    <>
      <InputLabel style={{ marginBottom: 5 }}>
        Create an Actor to start coordinating or collaborating
      </InputLabel>
      <Field
        className={classes.acterTypeContainer}
        component={Select}
        label="Acter Type"
        name="acterTypeId"
        placeholder="Select Acter Type"
        required={true}
        defaultValue={values.acterTypeId || ''}
        onChange={(event) => setFieldValue('acterTypeId', event.target.value)}
      >
        {types.map((type) => (
          <MenuItem value={type.id} key={`type-${type.id}`}>
            <Box className={classes.acterTypeItem}>
              <Typography variant="body1">{capitalize(type.name)}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Field>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textinput: {
      width: '88%',
      fontSize: '0.5rem',
      marginBottom: theme.spacing(3.5),
      color: theme.palette.secondary.light,
    },
    acterTypeContainer: {
      marginBottom: theme.spacing(1),
      width: '88%',
    },
    acterTypeItem: {
      display: 'flex',
      alignItems: 'center',
    },
  })
)

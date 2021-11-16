import React, { FC, useState } from 'react'

import { Box, InputLabel, MenuItem, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import { Field, useFormikContext } from 'formik'
import { TextField } from 'formik-material-ui'
import { Select } from 'formik-material-ui'

import { TextEditor } from '@acter/components/util/text-editor'
import { useActerTypes } from '@acter/lib/acter-types/use-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
import { ActerType } from '@acter/schema'

const { ORGANISATION, NETWORK, GROUP } = ActerTypes

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
  const { acterTypes } = useActerTypes()
  const { values, setFieldValue } = useFormikContext<BasicInformationValues>()

  const types = acterTypes.filter(({ name }) =>
    [ORGANISATION, NETWORK, GROUP].includes(name as ActerTypes)
  )

  return (
    <>
      <Field
        className={classes.chooseActerType}
        component={Select}
        label="Acter Type"
        name="acterTypeId"
        placeholder="Select Acter Type"
        required={true}
        isClearable={true}
      >
        {types.map((type) => (
          <MenuItem value={type.id} key={`type-${type.id}`}>
            <Box className={classes.acterTypeContainer}>
              <Typography variant="body1">{capitalize(type.name)}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Field>
      <Field
        className={classes.textinput}
        component={TextField}
        label="Name"
        name="name"
        required={true}
      />
      <Box mb={1} onClick={() => editor.focus()}>
        <InputLabel style={{ marginBottom: 5 }}>Description</InputLabel>
        <TextEditor
          width={535}
          height={150}
          initialValue={values.description}
          // @ts-ignore
          handleInputChange={(value) => setFieldValue('description', value)}
          editorRef={(editorRef) => setEditor(editorRef)}
        />
      </Box>

      <Field
        className={classes.textinput}
        component={TextField}
        label="Location"
        name="location"
        required={true}
      />
      <Field
        className={classes.textinput}
        component={TextField}
        label="Website link"
        name="url"
      />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textinput: {
      width: '90%',
      fontSize: '0.5rem',
      marginBottom: 20,
      color: theme.palette.secondary.light,
    },
    chooseActerType: {
      marginBottom: 25,
      width: '90%',
    },
    acterTypeContainer: {
      display: 'flex',
      alignItems: 'center',
    },
  })
)

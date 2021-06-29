import React, { FC, useState } from 'react'
import { Field, useFormikContext } from 'formik'
import { TextField } from 'formik-material-ui'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { InputLabel, Box } from '@material-ui/core'
import { TextEditor } from 'src/components/util/text-editor'

export interface BasicInformationValues {
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
    <>
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
  })
)

import React, { FC, useState } from 'react'
import { Box, InputLabel, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { grey } from '@material-ui/core/colors'
import { ImageUpload } from 'src/components/image-upload'
import { FormSetFieldValue, FormValues } from 'src/components/acter/form'
import { TextEditor } from 'src/components/util/text-editor'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      overflow: 'scroll',
    },
    descriptionSection: {
      marginBottom: 20,
    },
    label: {
      color: grey[700],
      marginBottom: 10,
      fontSize: '0.9rem',
      fontWeight: theme.typography.fontWeightBold,
    },
    textinput: {
      fontSize: '0.5rem',
      // marginBottom: 15,
      color: theme.palette.secondary.light,
      width: '100%',
    },
    textEditor: {
      border: '1px solid black',
      backgroundColor: 'red',
    },
    locationLabelSection: {
      display: 'flex',
      marginBottom: 10,
    },
    locationLabel: {
      color: grey[800],
      fontSize: '0.9rem',
      marginRight: 20,
    },
  })
)

export interface DetailsStepProps {
  values: FormValues
  setFieldValue: FormSetFieldValue
}

export const DetailsStep: FC<DetailsStepProps> = ({
  setFieldValue,
  values,
}) => {
  const classes = useStyles()
  const [editor, setEditor] = useState(null)

  return (
    <Box className={classes.container}>
      <Box>
        <ImageUpload
          aspectRatio={72 / 25}
          imageType="banner"
          setImageToFormField={setFieldValue}
          fileUrl={values.bannerUrl}
        />
      </Box>

      <Box
        className={classes.descriptionSection}
        onClick={() => editor.focus()}
      >
        <InputLabel className={classes.label}>Description</InputLabel>

        <TextEditor
          width={450}
          height={150}
          initialValue={values.description}
          // @ts-ignore
          handleInputChange={(value) => setFieldValue('description', value)}
          handleFocus={(editorRef) => setEditor(editorRef)}
        />
      </Box>

      <Box style={{ marginBottom: 20 }}>
        <InputLabel className={classes.label}>Locaiton</InputLabel>
        <Box className={classes.locationLabelSection}>
          <Typography variant="body1" className={classes.locationLabel}>
            <Field type="radio" name="isOnline" value="false" required={true} />{' '}
            Venue
          </Typography>

          <Typography variant="body1" className={classes.locationLabel}>
            <Field type="radio" name="isOnline" value="true" required={true} />{' '}
            Online
          </Typography>
        </Box>
        {values.isOnline === 'true' && (
          <Field
            className={classes.textinput}
            component={TextField}
            variant="outlined"
            name="url"
            title="meeting url"
            placeholder="Type online meeting link"
            required={true}
          />
        )}
        {values.isOnline === 'false' && (
          <Field
            className={classes.textinput}
            component={TextField}
            variant="outlined"
            name="location"
            title="address"
            placeholder="Type address"
            required={true}
          />
        )}
      </Box>
    </Box>
  )
}

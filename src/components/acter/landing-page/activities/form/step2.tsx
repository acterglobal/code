import React, { FC } from 'react'
import { Box, InputLabel, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { grey } from '@material-ui/core/colors'
import { ImageUpload } from 'src/components/image-upload'
import { FormikSetFieldType } from 'src/components/acter/landing-page/activities/form'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: 400,
    overflow: 'scroll',
  },
  descriptionSection: {
    marginBottom: 20,
  },
  label: {
    color: grey[700],
    marginBottom: 10,
    fontSize: '0.9rem',
    fontWeight: 'bold',
  },
  textinput: {
    fontSize: '0.5rem',
    // marginBottom: 15,
    color: theme.palette.secondary.light,
    width: '100%',
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
}))

export interface Step2Props {
  values: any
  setFieldValue: FormikSetFieldType
}

export const Step2: FC<Step2Props> = ({ setFieldValue, values }) => {
  const classes = useStyles()

  return (
    <Box className={classes.container}>
      <Box>
        <ImageUpload
          aspectRatio={72 / 25}
          imageType="activity banner"
          setImageToFormField={setFieldValue}
        />
      </Box>

      <Box className={classes.descriptionSection}>
        <InputLabel className={classes.label}>Description</InputLabel>
        <Field
          className={classes.textinput}
          component={TextField}
          variant="outlined"
          name="description"
          placeholder="Description of your activity"
          multiline
          rows={4}
          required={true}
        />
      </Box>

      <Box style={{ marginBottom: 20 }}>
        <InputLabel className={classes.label}>Locaiton</InputLabel>
        <Box className={classes.locationLabelSection}>
          <Typography variant="body1" className={classes.locationLabel}>
            <Field type="radio" name="location" value="venue" required={true} />{' '}
            Venue
          </Typography>

          <Typography variant="body1" className={classes.locationLabel}>
            <Field
              type="radio"
              name="location"
              value="online"
              required={true}
            />{' '}
            Online
          </Typography>
        </Box>
        {values.location !== '' &&
          (values.location === 'venue' ? (
            <Field
              className={classes.textinput}
              component={TextField}
              variant="outlined"
              name="address"
              placeholder="Type address"
              required={true}
            />
          ) : (
            <Field
              className={classes.textinput}
              component={TextField}
              variant="outlined"
              name="meetingUrl"
              placeholder="Type online meeting link"
              required={true}
            />
          ))}
      </Box>
    </Box>
  )
}

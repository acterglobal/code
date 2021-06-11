import React, { FC } from 'react'
import {
  Box,
  Grid,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { Button as SaveButton } from 'src/components/styled/button'
import { ImageUpload } from 'src/components/image-upload/index'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { InterestType, User } from '@schema'
import { grey } from '@material-ui/core/colors'
import { Acter } from '@schema'
export interface ProfileEditProps {
  user: User
  interestTypes: InterestType[]
  loading: boolean
  onSubmit: (data: Acter) => void
}

export const ProfileEdit: FC<ProfileEditProps> = ({
  user,
  interestTypes,
  onSubmit,
  loading,
}) => {
  const classes = useStyles()

  const interestIds = user.Acter.ActerInterests.map(
    ({ Interest }) => Interest.id
  )
  const initialValues = {
    avatar: user.Acter.avatarUrl,
    description: user.Acter.description,
    location: user.Acter.location,
    name: user.Acter.name,
    email: user.email,
    interestIds,
  }

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    onSubmit(values)
  }

  return (
    <Box className={classes.container}>
      <Typography variant="h4">Tell us about yourself</Typography>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => (
          <Form>
            <Grid container>
              <Grid item sm={12} md={4}>
                <ImageUpload
                  imageType="avatar"
                  setImageToFormField={props.setFieldValue}
                  fileUrl={user.Acter.avatarUrl}
                />
              </Grid>
              <Grid item sm={12} md={8}>
                <Field
                  className={classes.textinput}
                  component={TextField}
                  name="name"
                  placeholder="name"
                  variant="outlined"
                  inputProps={{
                    style: { paddingLeft: 25, fontSize: '0.9rem' },
                  }}
                />
                <Field
                  className={classes.textinput}
                  component={TextField}
                  name="email"
                  placeholder="you@acter.global"
                  variant="outlined"
                  disabled={true}
                  inputProps={{
                    style: { paddingLeft: 25, fontSize: '0.9rem' },
                  }}
                />

                <Field
                  className={classes.textinput}
                  component={TextField}
                  name="description"
                  multiline
                  rows={4}
                  placeholder="Write some thing about you"
                  variant="outlined"
                  inputProps={{ style: { padding: 10, fontSize: '0.9rem' } }}
                />

                <Field
                  className={classes.textinput}
                  component={TextField}
                  name="location"
                  placeholder="location"
                  variant="outlined"
                  inputProps={{
                    style: { paddingLeft: 25, fontSize: '0.9rem' },
                  }}
                />
              </Grid>
              <Grid item className={classes.interests} md={12}>
                <InterestsAddSection interestTypes={interestTypes} />
              </Grid>
            </Grid>
            <Grid container className={classes.buttonContainer}>
              <Grid
                item
                xs={12}
                md={3}
                className={classes.submitButtonContainer}
              >
                <SaveButton
                  className={classes.saveButton}
                  disabled={loading}
                  onClick={props.submitForm}
                >
                  Save
                </SaveButton>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: `${theme.spacing(2)}px auto`,
      padding: theme.spacing(4),
      minWidth: 350,
      maxWidth: 960,
      //TODO: make this reusable
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.divider,
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderRadius: theme.spacing(1),
    },
    fieldsContainer: {
      minHeight: 300,
      overflowY: 'scroll',
    },
    textinput: {
      width: '100%',
      marginBottom: theme.spacing(2),
    },
    interests: {
      width: '100%',
    },
    buttonContainer: {
      paddingTop: theme.spacing(2),
      justifyContent: 'flex-end',
    },
    submitButtonContainer: {
      marginRight: theme.spacing(1),
      width: '100%',
    },
    secondButton: {
      width: '100%',
      color: grey[700],
      borderRadius: theme.spacing(3),
    },
    saveButton: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
  })
)

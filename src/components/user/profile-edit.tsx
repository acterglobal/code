import React, { FC } from 'react'
import { Box, Button } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { Button as SaveButton } from 'src/components/user/auth/button'
import { ImageUpload } from 'src/components/image-upload/index'
import { InterestsAddSection } from 'src/components/acter/form/interests-add-section'
import { InterestType } from '@generated/type-graphql'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 'auto',
    maxWidth: 600,
  },
  fieldsContainer: {},
  textinput: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  secondButton: {
    marginTop: theme.spacing(2),
    width: '100%',
    color: grey[700],
    borderRadius: theme.spacing(3),
  },
}))

export interface ProfileEditProps {
  interestTypes: InterestType[]
  onSubmit: (any) => any
}

export const ProfileEdit: FC<ProfileEditProps> = ({
  interestTypes,
  onSubmit,
}) => {
  const classes = useStyles()

  const initialValues = {
    avatar: null,
    description: '',
    location: '',
  }

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false)
    onSubmit(values)
  }

  return (
    <Box className={classes.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <Box className={classes.fieldsContainer} m={4}>
              <ImageUpload
                imageType="avatar"
                setImageToFormField={props.setFieldValue}
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
                inputProps={{ style: { paddingLeft: 25, fontSize: '0.9rem' } }}
              />

              <Box ml={8}>
                <InterestsAddSection
                  interestTypes={interestTypes}
                  setFieldValue={props.setFieldValue}
                />
              </Box>
            </Box>
            <Box className={classes.button}>
              <SaveButton label="Save" hadleClick={props.submitForm} />
            </Box>
            <Button
              className={classes.secondButton}
              variant="outlined"
              onClick={() => null}
            >
              Complete later
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

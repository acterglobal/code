import React, { FC } from 'react'
import { Grid, createStyles, makeStyles, Theme } from '@material-ui/core'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { ImageUpload } from '@acter/components/image-upload'
import { FormButtons } from '@acter/components/util/forms'
import { ProfileFormLayout } from '@acter/components/user/form/layout'
import { useUser } from '@acter/lib/user/use-user'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'

export interface ProfileInfoFormValues {
  avatarUrl: string
  description: string
  email: string
  name: string
  location: string
}

export const ProfileInfoForm: FC = () => {
  const classes = useStyles()
  const [user, { loading }] = useUser()
  const [updateActer] = useUpdateActer(user?.Acter)

  if (loading || !user) {
    return <>Loading...</>
  }

  const { email } = user
  const { avatarUrl, name, description, location } = user.Acter

  const initialValues: ProfileInfoFormValues = {
    avatarUrl,
    description,
    email,
    name,
    location,
  }

  const handleSubmit = (values) => updateActer(values)

  return (
    <ProfileFormLayout>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Grid container>
            <Grid item sm={12} md={4}>
              <ImageUpload imageType="avatar" fileUrl={user?.Acter.avatarUrl} />
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
                inputProps={{
                  style: { padding: 10, fontSize: '0.9rem' },
                }}
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
          </Grid>
          <FormButtons align="right" hideUnlessDirty={true} />
        </Form>
      </Formik>
    </ProfileFormLayout>
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
  })
)

import React, { FC } from 'react'

import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  useTheme,
  Box,
} from '@material-ui/core'

import { Formik, Form, Field, FormikProps } from 'formik'
import { TextField } from 'formik-material-ui'

import { LocationPicker } from '@acter/components/atoms/fields/location-picker'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { ImageUpload } from '@acter/components/image-upload'
import { FormButtons } from '@acter/components/util/forms'
import { useUpdateActer } from '@acter/lib/acter/use-update-acter'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUser } from '@acter/lib/user/use-user'
import { Language } from '@acter/schema'

export interface ProfileInfoFormValues {
  avatarUrl: string
  description: string
  email: string
  name: string
  location: string
  placeId: string
  locationLat: number
  locationLng: number
  language: Language
}

export const ProfileInfoForm: FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'form' })
  const classes = useStyles()
  const theme = useTheme()
  const { user, fetching } = useUser()

  const [_, updateActer] = useUpdateActer(user?.Acter)

  if (fetching) return <LoadingSpinner />
  if (!user) return null

  const { email, language } = user
  const {
    avatarUrl,
    name,
    description,
    location,
    placeId,
    locationLat,
    locationLng,
  } = user.Acter

  const initialValues: ProfileInfoFormValues = {
    avatarUrl,
    description,
    email,
    name,
    location,
    placeId,
    locationLat,
    locationLng,
    language: language as Language,
  }

  const handleSubmit = (values) => updateActer(values)

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({
          dirty,
          values,
          submitForm,
          resetForm,
        }: FormikProps<ProfileInfoFormValues>) => {
          return (
            <Form
              onBlur={async () => {
                if (dirty) {
                  await submitForm()
                  resetForm({ values }) // <-- Changes dirty to false
                }
              }}
            >
              <Box className={classes.formButtons}>
                <FormButtons align="right" hideUnlessDirty={true} />
              </Box>
              <Box className={classes.formContainer}>
                <Grid container>
                  <Grid item sm={12} md={4}>
                    <ImageUpload
                      imageType="avatar"
                      fileUrl={user?.Acter.avatarUrl}
                    />
                  </Grid>
                  <Grid className={classes.fieldsContainer} item sm={12} md={8}>
                    <Typography className={classes.label}>
                      {t('name')}
                    </Typography>

                    <Field
                      className={classes.textinput}
                      component={TextField}
                      name="name"
                      placeholder={t('name')}
                      InputProps={{
                        disableUnderline: true,
                      }}
                      inputProps={{
                        style: {
                          paddingLeft: 15,
                          fontSize: '1.4rem',
                          fontWeight: theme.typography.fontWeightMedium,
                          backgroundColor: theme.colors.white,
                          borderRadius: 5,
                          height: 35,
                        },
                      }}
                    />
                    <Typography className={classes.label}>Email</Typography>

                    <Field
                      className={classes.textinput}
                      component={TextField}
                      name="email"
                      placeholder="you@acter.global"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      disabled={true}
                      inputProps={{
                        style: {
                          paddingLeft: 15,
                          fontSize: '1.4rem',
                          fontWeight: theme.typography.fontWeightMedium,
                          backgroundColor: theme.colors.white,
                          borderRadius: 5,
                          height: 35,
                        },
                      }}
                    />
                    <Typography className={classes.label}>
                      {t('location')}
                    </Typography>

                    <LocationPicker
                      types={['(regions)']}
                      cacheKey="regions"
                      fieldFor="profile"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Form>
          )
        }}
      </Formik>
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formButtons: {
      height: theme.spacing(8),
      width: '100%',
      backgroundColor: theme.palette.secondary.main,
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingRight: '5%',
    },
    formContainer: {
      paddingTop: '5%',
      paddingRight: '5%',
      paddingLeft: '5%',
      height: 350,
      backgroundColor: theme.colors.grey.extraLight,
    },
    fieldsContainer: {
      paddingLeft: 16,
    },
    label: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '0.85rem',
      color: theme.colors.blue.mediumGrey,
      textTransform: 'capitalize',
      marginBottom: 4,
    },
    textinput: {
      width: 420,
      marginBottom: theme.spacing(2),
    },
  })
)

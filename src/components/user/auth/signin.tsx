import React, { FC, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { signIn } from 'next-auth/client'
import {
  Box,
  Link as MuiLink,
  FormControlLabel,
  Checkbox,
  Typography,
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { green, grey } from '@material-ui/core/colors'
import { Formik, Form, FormikHelpers } from 'formik'
import { InputField } from 'src/components/user/auth/input-field'
import { Button } from 'src/components/user/auth/button'
import * as Yup from 'yup'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    margin: 'auto',
    maxWidth: 500,
    paddingTop: theme.spacing(10),
  },
  heading: {
    fontWeight: 'bold',
    color: green[600],
    textAlign: 'center',
  },
  fieldsContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  socialButtonsContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 160,
    justifyContent: 'space-between',
  },
  loginLink: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
}))

const validationSchema = Yup.object({
  // fullName: Yup.string()
  //   .min(2, '* Name should be minimum 2 charecters')
  //   .required('* Please enter the name'),
  email: Yup.string()
    .email('* Please enter valid email')
    .required('* Please enter email'),
  // password: Yup.string()
  //   .matches(
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&\\])[A-Za-z\d@$!%*#?&\\]{8,}$/,
  //     'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  //   )
  //   .required('* Please enter the password'),
  // passwordConfirm: Yup.string().oneOf(
  //   [Yup.ref('password'), null],
  //   'Passwords must match'
  // ),
})

const SIGN_UP = 'signup'
const SIGN_IN = 'signin'
interface SigninProps {
  providers: any
  variant: typeof SIGN_UP | typeof SIGN_IN
}

export const Signin: FC<SigninProps> = ({ providers, variant }) => {
  const classes = useStyles()
  const initialValues = { fullName: '', email: '', password: '' }
  const [canSubmit, setCanSubmit] = useState(variant === SIGN_IN)

  const router = useRouter()
  const {
    query: { callbackUrl },
  } = router

  return (
    <Box maxWidth="sm" className={classes.container}>
      <Box>
        <Typography className={classes.heading} variant="h5">
          {variant === SIGN_UP
            ? 'Welcome! Please give us your email to get started:'
            : 'Welcome back. Please enter the email address you used to sign up:'}
        </Typography>
      </Box>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          let callbackUrl = router.query?.callbackUrl as string
          if (
            !callbackUrl ||
            callbackUrl.match(/signin/) ||
            callbackUrl.match(/signup/)
          ) {
            callbackUrl = '/'
          }
          return signIn('email', { ...values, callbackUrl })
        }}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <Box className={classes.fieldsContainer} m={4}>
              {/* <InputField label="Full Name" name="fullName" /> */}
              <InputField label="Email" name="email" />
              {/* <InputField label="Password" name="password" type="password" />
              <InputField
                label="Confirm Password"
                name="passwordConfirm"
                type="password"
              /> */}
              {variant === SIGN_UP && (
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={({ target: { checked } }) =>
                        setCanSubmit(checked)
                      }
                    />
                  }
                  label={
                    <Typography variant="subtitle1">
                      I have read and agree to{' '}
                      <Link href="/privacy-policy">
                        <a className={classes.loginLink} target="_blank">
                          Privacy Policy
                        </a>
                      </Link>
                    </Typography>
                  }
                />
              )}

              <Button
                label="Signin"
                disabled={!canSubmit}
                handleClick={props.submitForm}
              />
            </Box>
          </Form>
        )}
      </Formik>
      {providers.length > 0 && (
        <Box className={classes.socialButtonsContainer}>
          <>
            <Typography variant="subtitle1">
              Or get started with one of these providers
            </Typography>
            {Object.keys(providers)
              .filter((key) => !['email', 'credentials'].includes(key))
              .map((key) => {
                const provider = providers[key]
                return (
                  <Button
                    label={`Continue with ${provider.name}`}
                    socailSignupType={true}
                    handleClick={() => signIn(provider.id)}
                  />
                )
              })}
          </>
        </Box>
      )}
      <Box className={classes.socialButtonsContainer}>
        {variant === SIGN_UP ? (
          <Typography variant="body2" style={{ color: grey[600] }}>
            Already have an account?
            <Link href="/login">
              <MuiLink
                className={classes.loginLink}
                component="button"
                variant="body2"
              >
                Sign In
              </MuiLink>
            </Link>
          </Typography>
        ) : (
          <Typography variant="body2" style={{ color: grey[600] }}>
            First time here?
            <Link href="/signup">
              <MuiLink
                className={classes.loginLink}
                component="button"
                variant="body2"
              >
                Sign Up
              </MuiLink>
            </Link>
          </Typography>
        )}
      </Box>
    </Box>
  )
}

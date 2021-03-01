import React, { FC } from 'react'
import { Box, Link, Typography } from '@material-ui/core'
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
  fullName: Yup.string()
    .min(2, '* Name should be minimum 2 charecters')
    .required('* Please enter the name'),
  email: Yup.string()
    .email('* Please enter valid email')
    .required('* Please enter email'),
  password: Yup.string()
    .min(5, '* Password should be minimum 5 charecters')
    .required('* Please enter the password'),
})

export const Signup: FC = () => {
  const classes = useStyles()
  const initialValues = { fullName: '', email: '', password: '' }

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 500)
  }

  const handleSocialLogin = () => {
    // TODO: handle social login
  }
  const handleLoginLink = () => {
    // TODO: redirect to login screen
  }

  return (
    <Box maxWidth="sm" className={classes.container}>
      <Box>
        <Typography className={classes.heading} variant="h4">
          Welcome!
        </Typography>
      </Box>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {(props) => (
          <Form>
            <Box className={classes.fieldsContainer} m={4}>
              <InputField label="Full Name" name="fullName" />
              <InputField label="Email" name="email" />
              <InputField label="Password" name="password" type="password" />

              <Button label="Signup" hadleClick={props.submitForm} />
            </Box>
          </Form>
        )}
      </Formik>
      <Box className={classes.socialButtonsContainer}>
        <Button
          label="Continue with LinkedIn"
          socailSignupType={true}
          hadleClick={handleSocialLogin}
        />
        <Button
          label="Continue with Google"
          socailSignupType={true}
          hadleClick={handleSocialLogin}
        />
        <Button
          label="Continue with Facebook"
          socailSignupType={true}
          hadleClick={handleSocialLogin}
        />
        <Typography variant="body2" style={{ color: grey[600] }}>
          Already have an account?
          <Link
            className={classes.loginLink}
            component="button"
            variant="body2"
            onClick={handleLoginLink}
          >
            Login
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

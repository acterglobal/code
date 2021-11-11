import React, { FC, useEffect } from 'react'

import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { validate } from 'email-validator'
import { Field, useFormikContext } from 'formik'

import { InviteFormValues } from '@acter/components/invites/form'
import { EmailAddressChip } from '@acter/components/invites/form/email-address-chip'

export const InviteByEmail: FC = () => {
  const classes = useStyles()

  const {
    errors,
    values: { email, emails },
    setFieldValue,
  } = useFormikContext<InviteFormValues>()

  useEffect(() => {
    setFieldValue('emails', emails)
  }, [emails])

  const handleDeleteEmailAddress = (emailAddress) => {
    const updatedEmailList = emails.filter((email) => email !== emailAddress)
    setFieldValue('emails', updatedEmailList)
  }

  const handleKeyDown = (event) => {
    if (['Enter', 'Tab', ','].includes(event.key)) {
      event.preventDefault()
      const newEmail = email.trim()
      const isValidEmail = validate(newEmail) && !emails.includes(newEmail)

      if (isValidEmail) {
        setFieldValue('emails', [...emails, newEmail])
        setFieldValue('email', '')
      }
    }
  }

  const handlePaste = (event) => {
    event.preventDefault()
    const input = event.clipboardData.getData('text')
    const allEmails = input.split(/[\s,]/)
    const validEmails = allEmails.filter(
      (email) => validate(email) && !emails.includes(email)
    )

    if (validEmails.length !== 0)
      setFieldValue('emails', [...emails, ...validEmails])
    else setFieldValue('email', '')
  }

  return (
    <FormGroup>
      <FormLabel className={classes.label}>Invite by Email</FormLabel>
      <Box className={classes.emailAddress}>
        {emails.map((emailAddress, i) => (
          <EmailAddressChip
            key={`email-${i}`}
            emailAddress={emailAddress}
            handleDelete={handleDeleteEmailAddress}
          />
        ))}
        <Field
          className={classes.email}
          name="email"
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
        />
      </Box>
      {errors.email && (
        <Typography className={classes.error}>{errors.email}</Typography>
      )}

      <Field name="message" className={classes.message} as="textarea" />
      <Button
        className={classes.button}
        variant="outlined"
        color="inherit"
        type="submit"
      >
        Send invites
      </Button>
    </FormGroup>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '0.85rem',
      color: theme.palette.secondary.main,
      marginBottom: theme.spacing(1),
    },
    emailAddress: {
      borderRadius: theme.spacing(0.6),
      border: '0.5px solid',
      borderColor: theme.palette.secondary.light,
      minHeight: theme.spacing(4.5),
      padding: theme.spacing(1),
      display: 'flex',
      flexWrap: 'wrap',
    },
    email: {
      color: theme.colors.grey.dark,
      padding: theme.spacing(0.5),
      outline: 'none',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '0.8rem',
      border: 'none',
      width: '100%',
    },
    error: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.75rem',
      color: theme.colors.error,
    },
    message: {
      marginTop: theme.spacing(1.5),
      outline: 'none',
      resize: 'none',
      color: theme.colors.grey.dark,
      fontFamily: theme.typography.fontFamily,
      fontSize: '0.85rem',
      borderRadius: theme.spacing(0.6),
      border: '0.5px solid',
      borderColor: theme.palette.secondary.light,
      minHeight: theme.spacing(20),
      padding: theme.spacing(1),
      marginBottom: theme.spacing(1.5),
    },
    button: {
      alignSelf: 'end',
      height: theme.spacing(4.5),
      color: theme.palette.primary.main,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '0.75rem',
    },
  })
)

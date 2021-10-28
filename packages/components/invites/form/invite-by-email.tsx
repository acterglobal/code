import React, { FC, useEffect, useState } from 'react'

import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { validate } from 'email-validator'
import { Field, useFormikContext } from 'formik'

import { InviteFormValues } from '@acter/components/invites/form'
import { EmailAddressChip } from '@acter/components/invites/form/email-address-chip'

export const InviteByEmail: FC = () => {
  const classes = useStyles()
  const {
    values: { emails },
    setFieldValue,
  } = useFormikContext<InviteFormValues>()
  const [input, setInput] = useState('')

  useEffect(() => {
    setFieldValue('emailAddresses', emails)
  }, [emails])

  const handleDeleteEmailAddress = (emailAddress) => {
    const updatedEmailList = emails.filter((email) => email !== emailAddress)
    setFieldValue('emails', updatedEmailList)
  }

  const handleKeyDown = (event) => {
    if (['Enter', 'Tab', ','].includes(event.key)) {
      event.preventDefault()
      const email = input.trim()
      const isValidEmail = validate(email) && !emails.includes(email)

      if (isValidEmail) {
        setFieldValue('emails', [...emails, email])
        setInput('')
      }
    }
  }
  const handleInputChange = (event) => setInput(event.target.value)

  const handlePaste = (event) => {
    event.preventDefault()
    const input = event.clipboardData.getData('text')
    const allEmails = input.split(/[\s,]/)
    const validEmails = allEmails.filter(
      (email) => validate(email) && !emails.includes(email)
    )

    if (validEmails.length !== 0)
      setFieldValue('emails', [...emails, ...validEmails])
    else setInput(input)
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
        <input
          className={classes.input}
          type="email"
          value={input}
          onKeyDown={handleKeyDown}
          onChange={handleInputChange}
          onPaste={handlePaste}
        />
      </Box>

      <Field name="message" className={classes.message} as="textarea" />
      <Button
        className={classes.button}
        variant="outlined"
        color="inherit"
        disabled={emails.length <= 0}
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
      marginBottom: theme.spacing(1.5),
      display: 'flex',
      flexWrap: 'wrap',
    },
    input: {
      color: theme.colors.grey.dark,
      padding: theme.spacing(0.5),
      outline: 'none',
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: '0.8rem',
      border: 'none',
      width: '100%',
    },
    message: {
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

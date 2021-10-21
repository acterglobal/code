import React, { FC, useState } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { InviteByEmail } from './invite-by-email'
import { InviteByLink } from './invite-by-link'
import { Form, Formik } from 'formik'

import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export type InviteFormValues = {
  inviteLink: string
  emailAddresses: string[]
  invitationMessage: string
}

export const InviteForm: FC = () => {
  const classes = useStyles()
  const [status, setStatus] = useState(false)

  const { acter } = useActer()
  const { user } = useUser()
  if (!acter || !user) return null
  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  const initialValues: InviteFormValues = {
    inviteLink: acterAsUrl({ acter, includeBaseUrl: true }),
    emailAddresses: [],
    invitationMessage: `Hi! I'm inviting you to join “Actor name” on Acter. “Acter name” is using Acter as our dedicated space for communication & collaboration.`,
  }

  const handleSubmit = (data) => {
    console.log('DATA', data)
    setStatus(true)
  }

  return (
    <Box className={classes.content}>
      {!isAdmin && (
        <Typography className={classes.headerMessage} variant="h6">
          Invite people to join "{acter.name}"
        </Typography>
      )}

      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <InviteByLink />

          <InviteByEmail />
        </Form>
      </Formik>

      {status && (
        <Typography className={classes.status}>Invites sent</Typography>
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      marginTop: theme.spacing(3),
      padding: theme.spacing(4),
      color: theme.palette.secondary.main,
    },
    headerMessage: {
      fontSize: '0.85rem',
      textAlign: 'center',
      marginBottom: theme.spacing(8),
      fontWeight: theme.typography.fontWeightBold,
    },
    status: {
      float: 'right',
      marginTop: theme.spacing(1.5),
      width: theme.spacing(13),
      textAlign: 'center',
      color: theme.palette.primary.main,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '0.75rem',
    },
  })
)

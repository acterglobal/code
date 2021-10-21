import React, { FC } from 'react'

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
import { useCreateInvite } from '@acter/lib/invites/use-create-invites'
import { capitalize } from '@acter/lib/string/capitalize'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export type InviteFormValues = {
  inviteLink: string
  emails: string[]
  message: string
  acterId: string
  userId: string
}

export const InviteForm: FC = () => {
  const classes = useStyles()

  const [createInvite] = useCreateInvite()
  const { acter } = useActer()
  const { user } = useUser()
  if (!acter || !user) return null
  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  const acterName = capitalize(acter.name)

  const initialValues: InviteFormValues = {
    inviteLink: acterAsUrl({ acter, includeBaseUrl: true }),
    emails: [],
    message: `Hi! 
I'm inviting you to join ${acterName} on Acter. ${acterName} is using Acter as our dedicated space for communication & collaboration.`,
    acterId: acter.id,
    userId: user.id,
  }

  const handleSubmit = (values: InviteFormValues, { setFieldValue }) => {
    values.emails.map((email) => createInvite({ ...values, email }))
    setFieldValue('emails', [])
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

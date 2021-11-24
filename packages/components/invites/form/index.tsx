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
import { Form, Formik, FormikBag } from 'formik'

import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { getInvitationMessage } from '@acter/lib/invites/get-invitation-message'
import { useCreateInvites } from '@acter/lib/invites/use-create-invites'
import { useInvites } from '@acter/lib/invites/use-invites'
import { capitalize } from '@acter/lib/string/capitalize'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'
import { InviteCreateManyInput } from '@acter/schema/generated/resolvers/inputs/InviteCreateManyInput'

export type InviteFormValues = {
  inviteLink: string
  emails: string[]
  message: string
  onActerId: string
  createdByUserId: string
}

export const InviteForm: FC = () => {
  const classes = useStyles()
  const { acter } = useActer()
  const { user } = useUser()

  const { reexecuteQuery: refetchInvites } = useInvites({
    onActerId: acter?.id,
    createdByUserId: user?.id,
  })
  const [_, createInvites] = useCreateInvites({
    onCompleted: () => refetchInvites({ requestPolicy: 'network-only' }),
  })

  if (!acter || !user) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  const acterName = capitalize(acter.name)
  const userName = capitalize(user.Acter.name)

  const initialValues: InviteFormValues = {
    inviteLink: acterAsUrl({ acter, includeBaseUrl: true }),
    emails: [],
    message: getInvitationMessage(acterName, userName),
    onActerId: acter.id,
    createdByUserId: user.id,
  }

  const handleSubmit = (
    values: InviteFormValues,
    {
      setSubmitting,
      setFieldError,
      setFieldValue,
    }: FormikBag<unknown, InviteFormValues>
  ) => {
    const { emails, message, onActerId, createdByUserId } = values

    if (emails.length <= 0) {
      setSubmitting(false)
      return setFieldError('emails', '* Please enter a valid email address.')
    }

    const formData = { message, onActerId, createdByUserId, sentAt: new Date() }
    const data: InviteCreateManyInput[] = emails.reduce(
      (memo, email) => [...memo, { email, ...formData }],
      []
    )

    createInvites(data)

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

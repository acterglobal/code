import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  createStyles,
  ListItem,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { Action } from '@acter/components/invites/invitations/action'
import { InviteActions } from '@acter/lib/constants'
import { DD_MM_YY_FORMAT } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { Invite } from '@acter/schema'

const { CANCEL, RESEND } = InviteActions

interface InvitationProps {
  invite: Invite
}
export const Invitation: FC<InvitationProps> = ({ invite }) => {
  const classes = useStyles()
  const { locale } = useRouter()
  return (
    <ListItem>
      <Box className={classes.emailSection}>
        <Typography className={classes.email}>{invite.email}</Typography>
        {invite.sentAt && (
          <Typography className={classes.sentAt}>
            {parseAndFormat({
              dateString: invite.sentAt,
              formatString: DD_MM_YY_FORMAT,
              currentLocale: locale,
            })}
          </Typography>
        )}
      </Box>
      <Box className={classes.actions}>
        <Action action={CANCEL} invite={invite} />
        <Action action={RESEND} invite={invite} />
      </Box>
    </ListItem>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    emailSection: {
      width: '75%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    email: {
      fontSize: '0.8rem',
      fontWeight: theme.typography.fontWeightLight,
    },
    sentAt: {
      fontSize: '0.75rem',
      fontWeight: theme.typography.fontWeightLight,
      marginRight: theme.spacing(1),
    },
    actions: {
      width: '33%',
      display: 'flex',
      justifyContent: 'space-between',
    },
  })
)

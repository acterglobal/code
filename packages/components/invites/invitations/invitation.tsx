import React, { FC } from 'react'

import {
  Box,
  Button,
  createStyles,
  ListItem,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from '@material-ui/core'

// import { inviteEmailCreateQueue } from '@acter/jobs'
import { useUser } from '@acter/lib/user/use-user'
import { Invite } from '@acter/schema'

interface InvitationProps {
  invite: Invite
}
export const Invitation: FC<InvitationProps> = ({ invite }) => {
  const classes = useStyles()
  const theme = useTheme()
  const { user } = useUser()

  if (!user) return null

  const handleCancel = () => null
  const handleResend = () => {
    // inviteEmailCreateQueue.add(
    //   `create-invite-email-${invite.email}`,
    //   { ...invite, senderName: user.Acter.name },
    //   { removeOnComplete: true }
    // )
  }

  return (
    <ListItem className={classes.item}>
      <Box className={classes.emailSection}>
        <Typography className={classes.email}>{invite.email}</Typography>
      </Box>
      <Box className={classes.actions}>
        <Button
          color="inherit"
          className={classes.action}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          color="inherit"
          style={{ color: theme.palette.primary.main }}
          className={classes.action}
          onClick={handleResend}
        >
          Resend
        </Button>
      </Box>
    </ListItem>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      margin: theme.spacing(1),
    },
    emailSection: {
      width: '68%',
    },
    email: {
      fontSize: '0.8rem',
      fontWeight: theme.typography.fontWeightLight,
      marginRight: theme.spacing(1),
    },
    actions: {
      width: '32%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    action: {
      textTransform: 'capitalize',
      fontSize: '0.85rem',
    },
    resend: {
      color: theme.palette.primary.main,
    },
  })
)

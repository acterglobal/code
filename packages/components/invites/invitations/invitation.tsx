import React, { FC } from 'react'

import {
  Box,
  createStyles,
  ListItem,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import clsx from 'clsx'

import { Invite } from '@acter/schema'

interface InvitationProps {
  invite: Invite
}
export const Invitation: FC<InvitationProps> = ({ invite }) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.item}>
      <Box className={classes.emailSection}>
        <Typography className={classes.email}>{invite.email}</Typography>
      </Box>
      <Box className={classes.actions}>
        <Typography className={classes.action}>Cancel</Typography>
        <Typography className={clsx(classes.action, classes.resend)}>
          Resend
        </Typography>
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
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: '0.85rem',
      cursor: 'pointer',
    },
    resend: {
      color: theme.palette.primary.main,
    },
  })
)

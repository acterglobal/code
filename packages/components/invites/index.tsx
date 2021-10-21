import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Theme } from '@material-ui/core'

import { InviteForm } from '@acter/components/invites/form'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'

export const InvitesSection: FC = () => {
  const classes = useStyles()
  const { acter } = useActer()
  const { user } = useUser()

  if (!acter || !user) return null
  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  return <Box className={classes.root}>{isMember && <InviteForm />}</Box>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 530,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      '& .MuiTab-wrapper': {
        textTransform: 'capitalize',
        fontWeight: theme.typography.fontWeightLight,
      },
      '& .Mui-selected': {
        color: theme.palette.secondary.dark,
        '& .MuiTab-wrapper': {
          fontWeight: theme.typography.fontWeightBold,
        },
      },
    },
  })
)

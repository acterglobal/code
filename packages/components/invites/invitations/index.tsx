import React, { FC } from 'react'

import { createStyles, List, makeStyles, Theme } from '@material-ui/core'

import { Invitation } from '@acter/components/invites/invitations/invitation'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useInvites } from '@acter/lib/invites/use-invites'
import { useUser } from '@acter/lib/user/use-user'

export const Invitations: FC = () => {
  const classes = useStyles()
  const { acter, loading: acterLoading } = useActer()
  const { user, loading: userLoading } = useUser()
  const { invites, loading: invitesLoading } = useInvites({
    onActerId: acter?.id,
    createdByUserId: user?.id,
  })
  if (acterLoading || userLoading || invitesLoading) return <LoadingSpinner />

  if (!acter || !user || !invites) return null

  return (
    <List className={classes.root}>
      {invites?.map((invite, i) => (
        <Invitation invite={invite} key={`invite-${i}`} />
      ))}
    </List>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
    },
  })
)

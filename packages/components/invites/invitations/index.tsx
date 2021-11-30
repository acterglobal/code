import React, { FC } from 'react'

import {
  createStyles,
  List,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { Invitation } from '@acter/components/invites/invitations/invitation'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useInvites } from '@acter/lib/invites/use-invites'
import { useUser } from '@acter/lib/user/use-user'

export const Invitations: FC = () => {
  const classes = useStyles()
  const { acter, fetching: acterLoading } = useActer()
  const { user, fetching: userLoading } = useUser()
  const { invites, fetching: invitesLoading } = useInvites({
    onActerId: acter?.id,
    createdByUserId: user?.id,
  })
  if (acterLoading || userLoading || invitesLoading) return <LoadingSpinner />

  if (!acter || !user || !invites) return null

  const activeInvites = invites.filter((invite) => invite.expiredAt === null)

  return (
    <>
      {activeInvites.length === 0 ? (
        <Typography className={classes.zeroMessage}>
          {`${acter.name} has no new invitations.`}
        </Typography>
      ) : (
        <List className={classes.list}>
          {activeInvites.map((invite, i) => (
            <Invitation invite={invite} key={`invite-${i}`} />
          ))}
        </List>
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    zeroMessage: {
      marginTop: theme.spacing(7),
      fontSize: '0.85rem',
      textAlign: 'center',
      color: theme.colors.grey.dark,
    },
    list: {
      marginTop: theme.spacing(3),
    },
  })
)

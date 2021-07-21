import React, { FC } from 'react'
import {
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { ActerAvatar } from '@acter/components/acter/avatar'
import {
  ConnectionState,
  ConnectionStateProps,
} from '@acter/components/acter/landing-page/members-section/connection-state'
import { Acter, ActerConnection, User } from '@acter/schema/types'

export interface DisplayMemberItemProps {
  user: User
  Follower: Acter
  connection: ActerConnection
  showJoinState?: boolean
  canEdit?: boolean
  onConnectionStateChange: ConnectionStateProps['onSubmit']
}

export const DisplayMemberItem: FC<DisplayMemberItemProps> = ({
  user,
  Follower,
  connection,
  showJoinState,
  canEdit,
  onConnectionStateChange,
}) => {
  const classes = useStyles()
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <ActerAvatar acter={Follower} />
        </ListItemAvatar>
        <ListItemText
          classes={{
            primary: classes.name,
            secondary: classes.acterType,
          }}
          className={classes.memberInfo}
          primary={Follower.name}
          secondary={Follower.ActerType.name}
        />
        {showJoinState && (
          <ListItemSecondaryAction>
            <ConnectionState
              connection={connection}
              canEdit={canEdit && Follower.id !== user.Acter.id}
              onSubmit={onConnectionStateChange}
            />
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <Divider
        classes={{ root: classes.divider }}
        variant="inset"
        component="li"
      />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  memberInfo: {
    marginLeft: 30,
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'capitalize',
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.colors.grey.dark,
  },
  acterType: {
    color: theme.colors.grey.dark,
  },
  divider: {
    marginLeft: 100,
  },
}))

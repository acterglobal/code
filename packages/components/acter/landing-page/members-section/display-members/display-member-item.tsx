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
import { Acter, ActerConnection, User } from '@acter/schema'

export interface DisplayMemberItemProps {
  /**
   *The active/logged-in user
   */
  user: User
  /**
   * The acter member we are displaying
   */
  Follower: Acter
  /**
   * The connection type of the member to the acter
   */
  connection: ActerConnection
  /**
   * Boolean indicating whether the member is connected to the acter
   */
  showJoinState?: boolean
  /**
   * Boolean indicating whether the user can edit member details
   */
  canEdit?: boolean
}

export const DisplayMemberItem: FC<DisplayMemberItemProps> = ({
  user,
  Follower,
  connection,
  showJoinState,
  canEdit,
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

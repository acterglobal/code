import React, { FC } from 'react'
import pluralize from 'pluralize'
import {
  Box,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core'
import { grey } from '@material-ui/core/colors'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { followerHasRoleOnActer } from 'src/lib/acter/follower-has-role-on-acter'
import { ActerAvatar } from 'src/components/acter/avatar'
import {
  ConnectionState,
  ConnectionStateProps,
} from 'src/components/acter/landing-page/members-section/connection-state'
import {
  Acter,
  ActerConnection,
  ActerConnectionRole,
  ActerJoinSettings,
  User,
} from '@schema'

import { ORGANISATIONS, PEOPLE } from 'src/constants'

export type MemberType = typeof ORGANISATIONS | typeof PEOPLE
export interface DisplayMembersProps {
  /**
   * The acter on which we are viewing members
   */
  acter: Acter
  /**
   * The list of acters we are displaying
   */
  followers: ActerConnection[]
  /**
   * The currently logged in user
   */
  user: User
  /**
   * The type of connection
   */
  type: MemberType
  /**
   * Action when Member state changes
   */
  onConnectionStateChange: ConnectionStateProps['onSubmit']
}

export const DisplayMembers: FC<DisplayMembersProps> = ({
  acter,
  user,
  followers = [],
  type,
  onConnectionStateChange,
}) => {
  const classes = useStyles()

  const showJoinState = followerHasRoleOnActer(
    user.Acter,
    ActerConnectionRole.MEMBER,
    acter
  )
  const canEdit = followerHasRoleOnActer(
    user.Acter,
    ActerConnectionRole.ADMIN,
    acter
  )

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h5">
        {followers.length} {pluralize(type)}
      </Typography>
      <Divider />

      <List className={classes.members}>
        {followers.map((connection) => {
          const { Follower } = connection
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
                      canEdit={canEdit}
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
        })}
      </List>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.spacing(1),
    borderColor: theme.palette.divider,
    borderWidth: 'thin',
    borderStyle: 'solid',
    overflow: 'hidden',
  },
  heading: {
    fontSize: '0.9rem',
    fontWeight: theme.typography.fontWeightBold,
    color: grey[600],
    marginBottom: 20,
  },
  members: {
    height: '100%',
    overflowY: 'scroll',
    width: '100%',
  },
  memberInfo: {
    marginLeft: 30,
    fontWeight: theme.typography.fontWeightBold,
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    color: grey[800],
  },
  acterType: {
    color: grey[700],
  },
  divider: {
    marginLeft: 100,
  },
}))

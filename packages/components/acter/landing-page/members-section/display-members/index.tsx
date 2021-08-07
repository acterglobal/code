import React, { FC } from 'react'
import pluralize from 'pluralize'
import { Box, Divider, Typography, List } from '@material-ui/core'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ConnectionStateProps } from '@acter/components/acter/landing-page/members-section/connection-state'
import { DisplayMemberItem } from '@acter/components/acter/landing-page/members-section/display-members/display-member-item'
import {
  Acter,
  ActerConnection,
  ActerConnectionRole,
  User,
} from '@acter/schema/types'

import { MemberType } from '@acter/lib/constants'
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
  /**
   * Boolean to indicate organisation member/follower type
   */
  isOrganisation?: boolean
}

export const DisplayMembers: FC<DisplayMembersProps> = ({
  acter,
  user,
  followers = [],
  type,
  onConnectionStateChange,
  isOrganisation,
}) => {
  const classes = useStyles()

  const showJoinState = userHasRoleOnActer(
    user,
    ActerConnectionRole.MEMBER,
    acter
  )
  const canEdit = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading} variant="h5">
        {followers.length} {pluralize(type)}
      </Typography>
      <Divider />

      <List className={classes.members}>
        {followers.map((connection, i) => {
          const { Follower } = connection

          if (isOrganisation) {
            return (
              <Link href={`${acterAsUrl({ acter: Follower })}`} key={i}>
                <DisplayMemberItem
                  user={user}
                  Follower={Follower}
                  connection={connection}
                  showJoinState={showJoinState}
                  canEdit={canEdit}
                  onConnectionStateChange={onConnectionStateChange}
                />
              </Link>
            )
          }

          return (
            <DisplayMemberItem
              key={i}
              user={user}
              Follower={Follower}
              connection={connection}
              showJoinState={showJoinState}
              canEdit={canEdit}
              onConnectionStateChange={onConnectionStateChange}
            />
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
    color: theme.colors.grey.dark,
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

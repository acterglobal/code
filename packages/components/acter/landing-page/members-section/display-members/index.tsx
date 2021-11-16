import React, { FC } from 'react'

import { Divider, Typography, List } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { DisplayMemberItem } from '@acter/components/acter/landing-page/members-section/display-members/display-member-item'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'

const { ADMIN, MEMBER } = ActerConnectionRole
export interface DisplayMembersProps {
  /**
   * The list of acters we are displaying
   */
  followers: ActerConnection[]
  /**
   * Boolean to indicate organisation member/follower type
   */
  isOrganisation?: boolean
}

export const DisplayMembers: FC<DisplayMembersProps> = ({
  followers = [],
  isOrganisation,
}) => {
  const classes = useStyles()
  const { acter, fetching: acterLoading } = useActer()
  const { user, fetching: userLoading } = useUser()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

  const showJoinState = userHasRoleOnActer(user, MEMBER, acter)
  const canEdit = userHasRoleOnActer(user, ADMIN, acter)

  const admins = followers.filter(({ role }) => role === ADMIN)
  const members = followers.filter(({ role }) => role === MEMBER)

  return (
    <List className={classes.list}>
      <Typography className={classes.heading}>Admins</Typography>
      {admins.map((connection) => {
        const { Follower } = connection

        return (
          <DisplayMemberItem
            key={`follower-${Follower.id}`}
            user={user}
            Follower={Follower}
            connection={connection}
            showJoinState={showJoinState}
            canEdit={canEdit}
            isOrganisation={isOrganisation}
          />
        )
      })}

      <Divider classes={{ root: classes.divider }} />
      <Typography className={classes.heading}>Members</Typography>

      {members.map((connection) => {
        const { Follower } = connection

        return (
          <DisplayMemberItem
            key={`follower-${Follower.id}`}
            user={user}
            Follower={Follower}
            connection={connection}
            showJoinState={showJoinState}
            canEdit={canEdit}
            isOrganisation={isOrganisation}
          />
        )
      })}
    </List>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: '100%',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
  },
  heading: {
    fontSize: '0.88rem',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.colors.grey.dark,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  list: {
    paddingLeft: theme.spacing(6.5),
    paddingRight: theme.spacing(6.5),
    height: '100%',
    overflowY: 'scroll',
    width: '100%',
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.secondary.light,
    height: '0.12rem',
  },
}))

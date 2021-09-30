import React, { FC } from 'react'
import { di } from 'react-magnetic-di'

import { Box, Divider, Typography, List } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import pluralize from 'pluralize'

import { DisplayMemberItem } from '@acter/components/acter/landing-page/members-section/display-members/display-member-item'
import { Link } from '@acter/components/util/anchor-link'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { MemberType } from '@acter/lib/constants'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnection, ActerConnectionRole } from '@acter/schema'

export interface DisplayMembersProps {
  /**
   * The list of acters we are displaying
   */
  followers: ActerConnection[]
  /**
   * The type of connection
   */
  type: MemberType
  /**
   * Boolean to indicate organisation member/follower type
   */
  isOrganisation?: boolean
}

export const DisplayMembers: FC<DisplayMembersProps> = ({
  followers = [],
  type,
  isOrganisation,
}) => {
  di(useActer, useUser)
  const classes = useStyles()
  const { acter, loading: acterLoading } = useActer()
  const { user, loading: userLoading } = useUser()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

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
        {followers.map((connection) => {
          const { Follower } = connection

          if (isOrganisation) {
            return (
              <Link
                href={`${acterAsUrl({ acter: Follower })}`}
                key={`follower-${Follower.id}`}
              >
                <DisplayMemberItem
                  user={user}
                  Follower={Follower}
                  connection={connection}
                  showJoinState={showJoinState}
                  canEdit={canEdit}
                />
              </Link>
            )
          }

          return (
            <DisplayMemberItem
              key={`follower-${Follower.id}`}
              user={user}
              Follower={Follower}
              connection={connection}
              showJoinState={showJoinState}
              canEdit={canEdit}
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
}))

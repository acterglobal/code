import React, { FC } from 'react'

import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Box,
} from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { ConnectionUpdateOptions } from '@acter/components/acter/landing-page/members-section/connection-update-options'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
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
  /**
   * Boolean to indicate organisation member/follower type
   */
  isOrganisation?: boolean
}

export const DisplayMemberItem: FC<DisplayMemberItemProps> = ({
  user,
  Follower,
  connection,
  showJoinState,
  canEdit,
  isOrganisation,
}) => {
  return (
    <ListItem>
      {isOrganisation ? (
        <Link
          href={`${acterAsUrl({ acter: Follower })}`}
          key={`follower-${Follower.id}`}
        >
          <Box style={{ display: 'flex' }}>
            <MemberDetails follower={Follower} />
          </Box>
        </Link>
      ) : (
        <MemberDetails follower={Follower} />
      )}

      {showJoinState && (
        <ListItemSecondaryAction>
          <ConnectionUpdateOptions
            connection={connection}
            canEdit={canEdit && Follower.id !== user.Acter.id}
          />
        </ListItemSecondaryAction>
      )}
    </ListItem>
  )
}

type MemberDetailsProps = {
  follower: Acter
}
const MemberDetails: FC<MemberDetailsProps> = ({ follower }) => {
  const classes = useStyles()
  return (
    <>
      <ListItemAvatar>
        <ActerAvatar acter={follower} />
      </ListItemAvatar>
      <ListItemText
        classes={{ primary: classes.name }}
        className={classes.memberInfo}
        primary={follower.name}
      />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  memberInfo: {
    marginLeft: theme.spacing(3),
    textTransform: 'capitalize',
  },
  name: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 12.5,
    color: theme.palette.secondary.main,
  },
}))

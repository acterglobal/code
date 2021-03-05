import React, { FC, useState, useEffect } from 'react'
import {
  Button,
  Grid,
  MenuItem,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core'
import { flattenFollowing } from 'src/lib/acter/flatten-following'
import { ActerAvatar } from 'src/components/acter/avatar'
import { DropdownMenu } from 'src/components/util/dropdown-menu'

import { Acter, User } from '@generated/type-graphql'

export interface ConnectProps {
  /**
   * The Acter on which we are setting membership
   */
  acter: Acter
  /**
   * The currently logged in user
   */
  user: User
  /**
   * Callback for when "Join" is pressed
   */
  onJoin: (follower: Acter, acter: Acter) => Promise<any>

  /**
   * Callback for when "Leave" is pressed
   */
  onLeave: (follower: Acter, acter: Acter) => Promise<any>

  /**
   * Whether an operation is in progress
   */
  loading: boolean
}

export const Connect: FC<ConnectProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
  loading,
}) => {
  const rows = flattenFollowing(user.Acter).filter(
    (following) => following.id !== acter.id
  )
  // Only include the User's UserActer if this Acter was not created by the User
  if (acter.createdByUserId !== user.id) {
    rows.unshift(user.Acter)
  }
  if (!rows.length) {
    return null
  }

  return (
    <DropdownMenu
      anchorNode={<StyledButton>Connect</StyledButton>}
      closeOnClick={false}
    >
      {rows.map((follower) => (
        <FollowerRow
          acter={acter}
          follower={follower}
          onJoin={onJoin}
          onLeave={onLeave}
          loading={loading}
        />
      ))}
    </DropdownMenu>
  )
}

interface FollowerRowProps extends Omit<ConnectProps, 'user'> {
  follower: Acter
}

const FollowerRow: FC<FollowerRowProps> = ({
  acter,
  follower,
  onJoin,
  onLeave,
  loading,
}) => {
  const noop = () => null
  const [onClick, setOnClick] = useState(noop)

  const isConnected = acter.Followers.map(
    ({ Follower: { id } }) => id
  ).includes(follower.id)

  useEffect(() => {
    if (loading) {
      setOnClick(() => noop)
      return
    }

    setOnClick(() => (isConnected ? onLeave : onJoin))
  }, [loading, isConnected])
  const verb = isConnected ? 'Leave' : 'Join'

  return (
    <StyledMenuItem
      key={`connect-${follower.id}`}
      onClick={() => {
        onClick(follower, acter)
        setOnClick(() => noop)
      }}
    >
      <Grid container alignItems="center" spacing={0}>
        <AvatarGrid>
          <ActerAvatar acter={follower} size={4} />
        </AvatarGrid>
        <Grid>
          {verb} as <strong>{follower.name}</strong>
        </Grid>
      </Grid>
    </StyledMenuItem>
  )
}

const AvatarGrid = withStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  })
)(Grid)

const StyledButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: 25,
      width: '100px',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      marginRight: theme.spacing(3),
      textTransform: 'none',
    },
  })
)(Button)

const StyledMenuItem = withStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: theme.typography.fontSize,
      padding: theme.spacing(2),
      borderStyle: 'solid',
      borderTopWidth: '1px',
      borderColor: theme.palette.divider,
      '&:first-child': {
        borderTopWidth: 0,
      },
    },
  })
)(MenuItem)

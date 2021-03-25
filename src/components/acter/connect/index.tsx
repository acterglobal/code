import React, { FC, useState, useEffect } from 'react'
import { signIn } from 'next-auth/client'
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

import { Acter, User } from '@schema'
import { ACTIVITY, NETWORK, ORGANISATION, USER } from 'src/constants'

// TODO: this IS the app and should be tested
export const filterFollowers = (acter: Acter) => (
  following: Acter
): boolean => {
  // Don't include self
  if (following.id === acter.id) return false

  // Don't include activity organizer
  if (
    acter.ActerType.name === ACTIVITY &&
    acter.Activity.organiserId === following.id
  ) {
    return false
  }

  switch (following.ActerType.name) {
    // Activities cannot connect to other types
    case ACTIVITY:
      return false
    // Networks cannot connect to anything
    case NETWORK:
      return false
    // Orgs can only connect to Networks
    case ORGANISATION:
      return [NETWORK].includes(acter.ActerType.name)
    // Users can connect to anything
    case USER:
      return true
    default:
      return false
  }
}

// TODO tests
export const getFollowers = (user: User, acter: Acter): Acter[] => {
  const followers = flattenFollowing(user.Acter).filter(filterFollowers(acter))
  // Only include the User's UserActer if this Acter was not created by the User
  if (acter.createdByUserId !== user.id) {
    followers.unshift(user.Acter)
  }
  return followers
}

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
  if (!user) {
    return (
      <StyledConnectButton onClick={() => signIn()}>Join</StyledConnectButton>
    )
  }
  const followers = getFollowers(user, acter)

  if (!followers.length) {
    return null
  }

  return (
    <DropdownMenu
      anchorNode={<StyledConnectButton>Connect</StyledConnectButton>}
      closeOnClick={false}
    >
      {followers.map((follower) => (
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

export const StyledConnectButton = withStyles((theme: Theme) =>
  createStyles({
    root: {
      borderRadius: theme.spacing(3),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      marginRight: theme.spacing(3),
      minWidth: theme.spacing(13),
      height: theme.spacing(3.5),
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
      },
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

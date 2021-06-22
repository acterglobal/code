import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { getFollowers } from 'src/lib/acter/get-followers'
import { ConnectButton } from 'src/components/acter/connect/connect-button'
import { FollowerRow } from 'src/components/acter/connect/follower-row'
import { DropdownMenu } from 'src/components/util/dropdown-menu'

import { Acter, User } from '@schema'

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onJoin: (acter: Acter, follower: Acter) => Promise<any> //ApolloGraphQL mutation function

  /**
   * Callback for when "Leave" is pressed
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onLeave: (acter: Acter, follower: Acter) => Promise<any> //ApolloGraphQL mutation function

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
  const router = useRouter()
  if (!user) {
    return (
      <ConnectButton onClick={() => router.push('/api/auth/login')}>
        Join
      </ConnectButton>
    )
  }

  const followers = getFollowers(user, acter).filter(
    (follower) => follower.id !== acter.Activity?.Organiser?.id
  )
  if (!followers.length) {
    return null
  }

  return (
    <DropdownMenu
      anchorNode={<ConnectButton>Connect</ConnectButton>}
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

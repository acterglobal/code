import React, { FC } from 'react'
import { signIn } from 'next-auth/client'
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
  if (!user) {
    return <ConnectButton onClick={() => signIn()}>Join</ConnectButton>
  }

  const followers = getFollowers(user, acter)
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

import React, { FC } from 'react'

import { ConnectButton } from '@acter/components/acter/connect/connect-button'
import { FollowerRow } from '@acter/components/acter/connect/follower-row'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { getActerConnection } from '@acter/lib/acter/get-acter-connection'
import { getFollowers } from '@acter/lib/acter/get-followers'
import { useActer } from '@acter/lib/acter/use-acter'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
import { useUser } from '@acter/lib/user/use-user'
import { Acter, User } from '@acter/schema'

export interface ConnectProps {
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

export const Connect: FC<ConnectProps> = ({ onJoin, onLeave, loading }) => {
  const { loginUrl } = useAuthRedirect()
  const { user, loading: userLoading } = useUser()
  const { acter, loading: acterLoading } = useActer()

  if (acterLoading || userLoading) return <LoadingSpinner />
  if (!acter) return null

  if (!user) {
    return <ConnectButton href={loginUrl}>Join</ConnectButton>
  }

  const followers = getFollowers(user, acter).filter(
    (follower) => follower.id !== acter.Activity?.Organiser?.id
  )
  if (!followers.length) {
    return null
  }

  const joinedFollowers = followers.filter((follower) =>
    getActerConnection(acter, follower)
  )

  return (
    <DropdownMenu
      anchorNode={
        <ConnectButton>
          {joinedFollowers.length > 0 ? 'Joined' : 'Join'}
        </ConnectButton>
      }
      closeOnClick={false}
    >
      {followers.map((follower) => (
        <FollowerRow
          follower={follower}
          onJoin={onJoin}
          onLeave={onLeave}
          loading={loading}
        />
      ))}
    </DropdownMenu>
  )
}

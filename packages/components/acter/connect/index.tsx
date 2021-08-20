import React, { FC } from 'react'
import { getFollowers } from '@acter/lib/acter/get-followers'
import { ConnectButton } from '@acter/components/acter/connect/connect-button'
import { FollowerRow } from '@acter/components/acter/connect/follower-row'
import { DropdownMenu } from '@acter/components/util/dropdown-menu'
import { Acter, User } from '@acter/schema'
import { getActerConnection } from '@acter/lib/acter/get-acter-connection'
import { useAuthRedirect } from '@acter/lib/url/use-auth-redirect'
export interface ConnectProps {
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
  /**
   * The Acter on which we are setting membership
   */
  acter?: Acter
}

export const Connect: FC<ConnectProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
  loading,
}) => {
  const { loginUrl } = useAuthRedirect()

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

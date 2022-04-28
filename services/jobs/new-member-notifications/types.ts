import { Acter, ActerConnection, ActerType } from '@acter/schema'

type ActerWithActerType = Acter &
  Required<{
    ActerType: ActerType
  }>

type ActerConnectionWithFollowerFollowing = ActerConnection &
  Required<{
    Follower: ActerWithActerType
    Following: ActerWithActerType
  }>

export type NewMemberJoinNotification = ActerConnectionWithFollowerFollowing

import { Acter, ActerType, Activity, ActivityType, User } from '@acter/schema'

export type ActerPick = Acter &
  Required<
    Pick<Acter, 'acterNotifyEmailFrequency' | 'id' | 'name' | 'slug'> & {
      ActerType: ActerTypePick
    }
  >
export type ActerPickWithUser = ActerPick &
  Required<{
    User: UserPick
  }>
type ActerTypePick = Required<Pick<ActerType, 'id' | 'name'>>
type UserPick = Required<Pick<User, 'id' | 'email'>>

export type ActivityPick = Required<
  Pick<
    Activity,
    'acterId' | 'createdByUserId' | 'endAt' | 'id' | 'isAllDay' | 'startAt'
  > & {
    Acter: ActerPick
    ActivityType: ActivityType
  }
>

export interface ActivityNotificationForActer {
  acter: ActerPickWithUser
  activity: ActivityPick
}

export interface ActivityNotification {
  /**
   * The activity for which we are creating a notification
   */
  activity: ActivityPick
}

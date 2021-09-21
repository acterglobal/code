import React, { FC } from 'react'

import { ActerMenuItem } from '@acter/components/acter/layout/menu/items/item'
import {
  ForumIcon,
  MembersIcon,
  ActivitiesIcon,
  SettingsIcon,
} from '@acter/components/icons'
import { ActerMenu as ActerMenuEnum } from '@acter/lib/constants'
import { useFetchNotifications } from '@acter/lib/notification/use-fetch-notifications'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import {
  Acter,
  ActerConnectionRole,
  NotificationType,
  User,
} from '@acter/schema'

const { ACTIVITIES, FORUM, MEMBERS, SETTINGS } = ActerMenuEnum
const { NEW_ACTIVITY, NEW_MEMBER, NEW_POST } = NotificationType

export interface ActerMenuItemsProps {
  acter: Acter
  user: User
}

export const ActerMenuItems: FC<ActerMenuItemsProps> = ({ acter, user }) => {
  const { notifications } = useFetchNotifications()
  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)

  const getNotifications = (type: NotificationType) =>
    notifications[acter.id]?.filter(
      (notification) => notification.type === type
    )

  return (
    <>
      <ActerMenuItem
        acter={acter}
        Icon={ForumIcon}
        path={FORUM}
        notifications={getNotifications(NEW_POST)}
      />
      <ActerMenuItem
        acter={acter}
        Icon={ActivitiesIcon}
        path={ACTIVITIES}
        notifications={getNotifications(NEW_ACTIVITY)}
      />
      <ActerMenuItem
        acter={acter}
        Icon={MembersIcon}
        path={MEMBERS}
        notifications={getNotifications(NEW_MEMBER)}
      />
      {isAdmin && (
        <ActerMenuItem acter={acter} Icon={SettingsIcon} path={SETTINGS} />
      )}
    </>
  )
}

import React, { FC } from 'react'

import {
  ForumIcon,
  MembersIcon,
  ActivitiesIcon,
  SettingsIcon,
} from '@acter/components/icons'
import { ActerMenuItem } from '@acter/components/layout/side-bar/acter-menu/tabs/acter-menu-item'
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

export interface ActerMenuTabsProps {
  acter: Acter
  user: User
}

export const ActerMenuTabs: FC<ActerMenuTabsProps> = ({ acter, user }) => {
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

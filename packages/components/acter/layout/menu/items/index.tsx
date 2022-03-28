import React, { FC } from 'react'

import { ActerMenuItem } from '@acter/components/acter/layout/menu/items/item'
import {
  ForumIcon,
  MembersIcon,
  ActivitiesIcon,
  SettingsIcon,
} from '@acter/components/icons'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerMenu as ActerMenuEnum } from '@acter/lib/constants'
import { useNotifications } from '@acter/lib/notification/use-notifications'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole, NotificationType } from '@acter/schema'

const { ACTIVITIES, FORUM, MEMBERS, SETTINGS } = ActerMenuEnum
const { NEW_ACTIVITY, NEW_MEMBER, NEW_POST } = NotificationType

export const ActerMenuItems: FC = () => {
  const { user } = useUser()
  const { notifications } = useNotifications()
  const { acter: fetchedParent } = useActer({ fetchParent: true })

  if (!fetchedParent) return null

  const acter = fetchedParent?.Parent ? fetchedParent.Parent : fetchedParent

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

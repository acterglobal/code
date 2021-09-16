import React, { FC } from 'react'

import {
  ListItem,
  Divider,
  ListItemAvatar,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import {
  ForumIcon,
  MembersIcon,
  ActivitiesIcon,
  SettingsIcon,
} from '@acter/components/icons'
import { ActerMenuItem } from '@acter/components/layout/side-bar/acter-menu-item'
import { commonStyles } from '@acter/components/layout/side-bar/common'
import { GroupsSection } from '@acter/components/layout/side-bar/groups/groups-section'
import { LinksList } from '@acter/components/layout/side-bar/links'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerMenu as ActerMenuEnum } from '@acter/lib/constants'
import { useLinks } from '@acter/lib/links/use-links'
import { useFetchNotifications } from '@acter/lib/notification/use-fetch-notifications'
import { useUser } from '@acter/lib/user/use-user'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerConnectionRole } from '@acter/schema'
import { NotificationType } from '@acter/schema'

const { ACTIVITIES, FORUM, MEMBERS, SETTINGS } = ActerMenuEnum
const { NEW_ACTIVITY, NEW_MEMBER, NEW_POST } = NotificationType

export const ActerMenu: FC = () => {
  const classes = useStyles()

  const { acter, loading: acterLoading } = useActer({ fetchParent: true })
  const { links, loading: linksLoading } = useLinks()
  const { user, loading: userLoading } = useUser()
  const { notifications } = useFetchNotifications()

  if (acterLoading || linksLoading || userLoading) return <LoadingSpinner />
  if (!acter || !links) return null

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  const getNotifications = (type: NotificationType) =>
    notifications[acter.id]?.filter(
      (notification) => notification.type === type
    )

  return (
    <>
      <ListItem divider className={classes.acterHeaderItem}>
        <ListItemAvatar>
          <ActerAvatar acter={acter} size={4} />
        </ListItemAvatar>
      </ListItem>
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

      {(isAdmin || isMember) && links.length > 0 && (
        <>
          <Divider className={classes.divider} />
          <LinksList links={links} />
        </>
      )}

      {(isAdmin || isMember) && (
        <>
          <Divider className={classes.divider} />
          <GroupsSection acter={acter} />
        </>
      )}
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    acterHeaderItem: {
      display: 'flex',
      justifyContent: 'center',
      borderColor: theme.palette.secondary.contrastText,
      height: 50,
      marginBottom: 5,
    },
    divider: {
      marginTop: theme.spacing(1),
    },
  })
)

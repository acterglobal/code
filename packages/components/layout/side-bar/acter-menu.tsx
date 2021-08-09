import React, { FC } from 'react'
import {
  ListItem,
  Divider,
  ListItemAvatar,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import {
  ForumIcon,
  MembersIcon,
  ActivitiesIcon,
  SettingsIcon,
} from '@acter/components/icons'
import { userHasRoleOnActer } from '@acter/lib/user/user-has-role-on-acter'
import { ActerAvatar } from '@acter/components/acter/avatar'
import { ActerMenuItem } from '@acter/components/layout/side-bar/acter-menu-item'
import { commonStyles } from '@acter/components/layout/side-bar/common'
import {
  ActerConnectionRole,
  User,
  Link as LinkType,
} from '@acter/schema/types'
import { ActerMenu as ActerMenuEnum } from '@acter/lib/constants'
import {
  GroupsSection,
  GroupsSectionProps,
} from '@acter/components/layout/side-bar/groups/groups-section'
import { LinksList } from '@acter/components/layout/side-bar/links'

const { ACTIVITIES, FORUM, MEMBERS, SETTINGS } = ActerMenuEnum

export type ActerMenuProps = GroupsSectionProps & {
  user: User
  links: LinkType[]
}

export const ActerMenu: FC<ActerMenuProps> = ({
  acter,
  user,
  links,
  acterTypes,
  onGroupSubmit,
}) => {
  if (!acter) return null
  const classes = useStyles()

  const isAdmin = userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter)
  const isMember = userHasRoleOnActer(user, ActerConnectionRole.MEMBER, acter)

  return (
    <>
      <ListItem divider className={classes.acterHeaderItem}>
        <ListItemAvatar>
          <ActerAvatar acter={acter} size={4} />
        </ListItemAvatar>
      </ListItem>
      <ActerMenuItem acter={acter} Icon={ForumIcon} path={FORUM} />
      <ActerMenuItem acter={acter} Icon={ActivitiesIcon} path={ACTIVITIES} />
      <ActerMenuItem acter={acter} Icon={MembersIcon} path={MEMBERS} />
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
          <GroupsSection
            acter={acter}
            user={user}
            acterTypes={acterTypes}
            onGroupSubmit={onGroupSubmit}
          />
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

import React, { FC } from 'react'
import {
  MenuList,
  ListItem,
  Divider,
  ListItemAvatar,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import {
  DateRangeOutlined as CalendarIcon,
  ForumOutlined as ForumIcon,
  PermIdentityOutlined as MembersIcon,
  SettingsOutlined as SettingsIcon,
} from '@material-ui/icons'
import { userHasRoleOnActer } from 'src/lib/user/user-has-role-on-acter'
import { ActerAvatar } from 'src/components/acter/avatar'
import { ActerMenuItem } from 'src/components/layout/side-bar/acter-menu-item'
import { commonStyles } from 'src/components/layout/side-bar/common'
import { ActerConnectionRole, User } from '@schema'
import { ACTIVITIES, FEED, MEMBERS, SETTINGS } from 'src/constants'
import {
  GroupsSection,
  GroupsSectionProps,
} from 'src/components/layout/side-bar/groups-section'

export type ActerMenuProps = GroupsSectionProps & { user: User }

export const ActerMenu: FC<ActerMenuProps> = ({
  acter,
  user,
  acterTypes,
  onCreateGroup,
}) => {
  if (!acter) return null
  const classes = useStyles()

  return (
    <MenuList>
      <ListItem divider className={classes.acterHeaderItem}>
        <ListItemAvatar>
          <ActerAvatar acter={acter} size={4} />
        </ListItemAvatar>
      </ListItem>
      <ActerMenuItem acter={acter} Icon={ForumIcon} path={FEED} />
      <ActerMenuItem acter={acter} Icon={CalendarIcon} path={ACTIVITIES} />
      <ActerMenuItem acter={acter} Icon={MembersIcon} path={MEMBERS} />
      {userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter) && (
        <ActerMenuItem acter={acter} Icon={SettingsIcon} path={SETTINGS} />
      )}
      <Divider />

      <GroupsSection
        acter={acter}
        acterTypes={acterTypes}
        onCreateGroup={onCreateGroup}
      />
    </MenuList>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    acterHeaderItem: {
      display: 'flex',
      justifyContent: 'center',
      borderColor: theme.palette.secondary.contrastText,
    },
  })
)

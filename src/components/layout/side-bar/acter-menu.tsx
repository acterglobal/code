import React, { FC } from 'react'
import {
  MenuList,
  MenuItem,
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
import { Acter, ActerConnectionRole, User } from '@schema'
import { ACTIVITIES, FEED, MEMBERS, SETTINGS } from 'src/constants'

export interface ActerMenuProps {
  acter?: Acter
  user?: User
}

export const ActerMenu: FC<ActerMenuProps> = ({ acter, user }) => {
  if (!acter) return null
  const classes = useStyles()

  return (
    <MenuList>
      <MenuItem divider className={classes.acterHeaderItem}>
        <ListItemAvatar>
          <ActerAvatar acter={acter} size={4} />
        </ListItemAvatar>
      </MenuItem>
      <ActerMenuItem acter={acter} Icon={ForumIcon} path={FEED} />
      <ActerMenuItem acter={acter} Icon={CalendarIcon} path={ACTIVITIES} />
      <ActerMenuItem acter={acter} Icon={MembersIcon} path={MEMBERS} />
      {userHasRoleOnActer(user, ActerConnectionRole.ADMIN, acter) && (
        <ActerMenuItem acter={acter} Icon={SettingsIcon} path={SETTINGS} />
      )}
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

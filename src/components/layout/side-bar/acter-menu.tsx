import React, { FC, useState } from 'react'
import {
  MenuList,
  ListItem,
  Divider,
  ListItemAvatar,
  createStyles,
  makeStyles,
  Theme,
  Box,
  Typography,
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
  const [openModal, setOpenModal] = useState(false)

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
    groupHeader: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      display: 'flex',
      justifyContent: 'space-between',
    },
    addIcon: {
      fontSize: 20,
      cursor: 'pointer',
    },
  })
)

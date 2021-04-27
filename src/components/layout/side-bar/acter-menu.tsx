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
import { ActerAvatar } from 'src/components/acter/avatar'
import { ActerMenuItem } from 'src/components/layout/side-bar/acter-menu-item'
import { Acter } from '@schema'
import { commonStyles } from 'src/components/layout/side-bar/common'
import { ACTIVITIES, FEED, MEMBERS, SETTINGS } from 'src/constants'

interface ActerMenuProps {
  acter?: Acter
}

export const ActerMenu: FC<ActerMenuProps> = ({ acter }) => {
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
      <ActerMenuItem acter={acter} Icon={SettingsIcon} path={SETTINGS} />
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

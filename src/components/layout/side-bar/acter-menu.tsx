import React, { FC } from 'react'
import Link from 'next/link'
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import {
  DateRangeOutlined as CalendarIcon,
  ForumOutlined as ForumIcon,
  PermIdentityOutlined as MembersIcon,
  SettingsOutlined as SettingsIcon,
  SvgIconComponent,
} from '@material-ui/icons'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { ActerAvatar } from 'src/components/acter/avatar'
import { Acter } from '@schema'
import { commonStyles } from 'src/components/layout/side-bar/common'

interface ActerMenuProps {
  acter?: Acter
}

export const ActerMenu: FC<ActerMenuProps> = ({ acter }) => {
  if (!acter) return null
  const classes = useStyles()
  return (
    <List disablePadding={true}>
      <ListItem divider className={classes.acterItem}>
        <ListItemAvatar>
          <ActerAvatar acter={acter} size={4} />
        </ListItemAvatar>
      </ListItem>
      <ActerMenuItem acter={acter} Icon={ForumIcon} path="feed" text="Feed" />
      <ActerMenuItem
        acter={acter}
        Icon={CalendarIcon}
        path="activities"
        text="Activities"
      />
      <ActerMenuItem
        acter={acter}
        Icon={MembersIcon}
        path="members"
        text="Members"
      />
      <ActerMenuItem
        acter={acter}
        Icon={SettingsIcon}
        path="settings"
        text="Settings"
      />
    </List>
  )
}

interface ActerMenuItemProps {
  acter: Acter
  Icon: SvgIconComponent
  path?: string
  text: string
}

const ActerMenuItem: FC<ActerMenuItemProps> = ({ acter, Icon, path, text }) => {
  const classes = useStyles()

  return (
    <ListItem className={classes.item}>
      <Link href={acterAsUrl(acter, path)}>
        <a>
          <ListItemIcon>
            <Icon color="inherit" />
          </ListItemIcon>
          <ListItemText primary={text} />
        </a>
      </Link>
    </ListItem>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    acterItem: {
      display: 'flex',
      justifyContent: 'center',
      borderColor: theme.palette.secondary.contrastText,
    },
  })
)

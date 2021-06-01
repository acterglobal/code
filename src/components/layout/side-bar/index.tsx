import React, { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { SvgIconComponent } from '@material-ui/icons'
import { ActerIcon } from 'src/components/icons/acter-icon'
import { HomeIcon } from 'src/components/icons/home-icon'
import { AddIcon } from 'src/components/icons/add-icon'
import { SearchIcon } from 'src/components/icons/search-icon'
import {
  ActerMenu,
  ActerMenuProps,
} from 'src/components/layout/side-bar/acter-menu'
import {
  FollowingList,
  FollowingListProps,
} from 'src/components/layout/side-bar/following-list'
import { commonStyles } from 'src/components/layout/side-bar/common'

export type SidebarProps = ActerMenuProps & FollowingListProps

export const Sidebar: FC<SidebarProps> = ({
  acter,
  acterTypes,
  user,
  onGroupSubmit,
}) => {
  const [drawerWidth, setDrawerWidth] = useState(4)
  const classes = useStyles({ drawerWidth })

  useEffect(() => {
    if (acter) {
      setDrawerWidth(14)
      return
    }
    setDrawerWidth(4)
  }, [acter])

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      classes={{ root: classes.drawer, paper: classes.drawerPaper }}
    >
      <Box className={classes.menu}>
        <List className={classes.list}>
          <IconMenuItem Icon={ActerLogoText} href="/" text="Acter" />
          <IconMenuItem Icon={HomeIcon} href="/dashboard" text="Home" />
          <IconMenuItem Icon={SearchIcon} href="/search" text="Search" />
          <Divider />
          <FollowingList user={user} />
          <IconMenuItem Icon={AddIcon} href="/acters/new" text="Add Acter" />
        </List>
      </Box>
      {acter && (
        <Box className={classes.subMenu}>
          <ActerMenu
            acter={acter}
            acterTypes={acterTypes}
            onGroupSubmit={onGroupSubmit}
            user={user}
          />
        </Box>
      )}
    </Drawer>
  )
}

interface IconMenuItemProps {
  href: string
  Icon: SvgIconComponent
  text: string
}

const IconMenuItem: FC<IconMenuItemProps> = ({ Icon, href, text }) => {
  const classes = useStyles({})
  return (
    <ListItem className={classes.item}>
      <Link href={href}>
        <a>
          <Icon fontSize="large" aria-label={text} />
        </a>
      </Link>
    </ListItem>
  )
}

type StyleProps = {
  drawerWidth?: number
}

const useStyles = makeStyles<Theme, StyleProps>((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    drawer: ({ drawerWidth }: StyleProps) => ({
      width: `${drawerWidth}rem`,
    }),
    drawerPaper: ({ drawerWidth }: StyleProps) => ({
      display: 'flex',
      flexDirection: 'row',
      width: `${drawerWidth}rem`,
      color: theme.palette.secondary.contrastText,
      '& .MuiDivider-root': {
        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderColor: theme.palette.secondary.contrastText,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
      },
    }),
    menu: {
      backgroundColor: theme.palette.secondary.main,
      height: '100%',
    },
    list: {
      margin: '.25rem 0',
      padding: 0,
      '& .MuiListItem-divider': {
        borderColor: theme.palette.secondary.contrastText,
      },
    },
    subMenu: {
      backgroundColor: theme.palette.secondary[600],
      height: '100%',
      width: '10rem',
      color: theme.palette.secondary.contrastText,
    },
  })
)

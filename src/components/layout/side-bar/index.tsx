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
import {
  AddCircleOutline as AddIcon,
  HomeOutlined as HomeIcon,
  LanguageOutlined as WorldIcon,
  SvgIconComponent,
} from '@material-ui/icons'
import { ActerLogoText } from 'src/components/icons/acter-logo-text'
import { ActerMenu } from 'src/components/layout/side-bar/acter-menu'
import { FollowingList } from 'src/components/layout/side-bar/following-list'
import { Acter, User } from '@schema'
import { commonStyles } from 'src/components/layout/side-bar/common'

export interface SidebarProps {
  /**
   * Optional Acter for which to show context submenu
   */
  acter?: Acter
  /**
   * Optional logged in User
   */
  user?: User
}

export const Sidebar: FC<SidebarProps> = ({ acter, user }) => {
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
          <IconMenuItem Icon={WorldIcon} href="/search" text="Search" />
          <Divider />
          <FollowingList user={user} />
          <IconMenuItem Icon={AddIcon} href="/acters/new" text="Add Acter" />
        </List>
      </Box>
      {acter && (
        <Box className={classes.subMenu}>
          <ActerMenu acter={acter} />
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

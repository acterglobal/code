import React, { FC, useEffect, useState } from 'react'
import { Link } from 'src/components/util/anchor-link'
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
import { ActerIcon, HomeIcon, AddIcon, SearchIcon } from 'src/components/icons'
import {
  ActerMenu,
  ActerMenuProps,
} from 'src/components/layout/side-bar/acter-menu'
import {
  FollowingList,
  FollowingListProps,
} from 'src/components/layout/side-bar/following-list'
import { commonStyles } from 'src/components/layout/side-bar/common'
import { subMenuBackgroundColor, subMenuTextColor } from 'src/themes/colors'
import { SearchMenu } from 'src/components/layout/side-bar/search-menu'
import { SearchType } from 'src/constants'

export type SidebarProps = ActerMenuProps &
  FollowingListProps & {
    searchType?: SearchType
  }

export const Sidebar: FC<SidebarProps> = ({
  acter,
  acterTypes,
  searchType,
  user,
  links,
  onGroupSubmit,
}) => {
  const [drawerWidth, setDrawerWidth] = useState(4)
  const classes = useStyles({ drawerWidth })

  useEffect(() => {
    if (acter || searchType) {
      setDrawerWidth(15)
      return
    }

    setDrawerWidth(4)
  }, [acter, searchType])

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      open={true}
      classes={{ root: classes.drawer, paper: classes.drawerPaper }}
    >
      <Box className={classes.menu}>
        <List className={classes.list}>
          <IconMenuItem Icon={ActerIcon} href="/" text="Acter" />
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
            links={links}
          />
        </Box>
      )}
      {searchType && (
        <SearchMenu acterTypes={acterTypes} searchType={searchType} />
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
        <Icon fontSize="large" aria-label={text} />
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
        backgroundColor: subMenuTextColor,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1.4),
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
    item: {
      magrinLeft: 'auto',
      marginRight: 'auto',
      paddingBottom: 0,
    },
    divider: {
      backgroundColor: 'red',
      marginBottom: 10,
    },
    subMenu: ({ drawerWidth }: StyleProps) => ({
      backgroundColor: subMenuBackgroundColor,
      height: '100%',
      width: `${drawerWidth}rem`,
      color: subMenuTextColor,
      '& .MuiListItem-root': {
        paddingTop: 3,
        paddingBottom: 3,
      },
    }),
  })
)

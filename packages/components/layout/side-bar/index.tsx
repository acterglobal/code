import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Link } from '@acter/components/util/anchor-link'
import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core'
import { SvgIconComponent } from '@material-ui/icons'
import {
  ActerIcon,
  HomeIcon,
  AddIcon,
  SearchIcon,
} from '@acter/components/icons'
import {
  ActerMenu,
  ActerMenuProps,
} from '@acter/components/layout/side-bar/acter-menu'
import { FollowingList } from '@acter/components/layout/side-bar/following-list'
import { commonStyles } from '@acter/components/layout/side-bar/common'
import { SearchMenu } from '@acter/components/layout/side-bar/search-menu'
import { SearchType } from '@acter/lib/constants'
import { useActer } from '@acter/lib/acter/use-acter'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'

export type SidebarProps = Omit<ActerMenuProps, 'acter'> & {
  searchType?: SearchType
  dashboard: boolean
}

export const Sidebar: FC<SidebarProps> = ({ dashboard, searchType, links }) => {
  const [acter, { loading: acterLoading }] = useActer()
  const [loading, setLoading] = useState(acterLoading)
  const [drawerWidth, setDrawerWidth] = useState(4)
  const classes = useStyles({ drawerWidth })
  const router = useRouter()

  useEffect(() => {
    setLoading(loading)
  }, [loading])

  useEffect(() => {
    if (!loading || acter || searchType) {
      setDrawerWidth(dashboard ? 4 : 15)
    }
  }, [loading, acter, searchType])

  if (loading) return <LoadingSpinner />

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
          <IconMenuItem
            Icon={HomeIcon}
            href="/dashboard"
            text="Home"
            active={router.route === '/dashboard'}
          />
          <IconMenuItem
            Icon={SearchIcon}
            href="/search"
            text="Search"
            active={router.route === '/search'}
          />
          <Divider />
          <FollowingList />
          <IconMenuItem Icon={AddIcon} href="/acters/new" text="Add Acter" />
        </List>
      </Box>
      {acter && (
        <Box className={classes.subMenu}>
          <ActerMenu acter={acter} links={links} />
        </Box>
      )}
      {searchType && <SearchMenu searchType={searchType} />}
    </Drawer>
  )
}

interface IconMenuItemProps {
  href: string
  Icon: SvgIconComponent
  text: string
  active?: boolean
}

const IconMenuItem: FC<IconMenuItemProps> = ({ Icon, href, text, active }) => {
  const classes = useStyles({})
  const theme = useTheme()

  return (
    <ListItem className={classes.item}>
      <Link href={href}>
        <Icon
          fontSize="large"
          aria-label={text}
          color="inherit"
          style={{
            color: active ? theme.colors.white : null,
            fontWeight: active ? 'bold' : null,
          }}
        />
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
        backgroundColor: theme.palette.secondary.light,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1.4),
      },
    }),
    menu: {
      backgroundColor: theme.palette.secondary.dark,
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
    subMenu: ({ drawerWidth }: StyleProps) => ({
      backgroundColor: theme.palette.secondary.main,
      height: '100%',
      width: `${drawerWidth}rem`,
      color: theme.palette.secondary.contrastText,
      '& .MuiListItem-root': {
        paddingTop: 3,
        paddingBottom: 3,
      },
    }),
  })
)

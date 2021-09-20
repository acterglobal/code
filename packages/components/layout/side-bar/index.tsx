import React, { FC } from 'react'

import { useRouter } from 'next/router'

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
import { commonStyles } from '@acter/components/layout/side-bar/common'
import { FollowingList } from '@acter/components/layout/side-bar/following-list'
import { Link } from '@acter/components/util/anchor-link'

export const PRIMARY_WIDTH = 8

export const Sidebar: FC = () => {
  const classes = useStyles()
  const router = useRouter()

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
            active={!!router.route.match(/^\/search/)}
          />
          <Divider />
          <FollowingList />
          <IconMenuItem Icon={AddIcon} href="/acters/new" text="Add Acter" />
        </List>
      </Box>
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
  const classes = useStyles()
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    drawer: {
      width: theme.spacing(PRIMARY_WIDTH),
    },
    drawerPaper: {
      display: 'flex',
      flexDirection: 'row',
      width: theme.spacing(PRIMARY_WIDTH),
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.contrastText,
      '& .MuiDivider-root': {
        backgroundColor: theme.palette.secondary.light,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        marginBottom: theme.spacing(1.4),
      },
    },
    menu: {
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
  })
)

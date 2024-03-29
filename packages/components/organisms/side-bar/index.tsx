import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  Divider,
  List,
  ListItem,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
  Hidden,
} from '@material-ui/core'
import { SvgIconComponent } from '@material-ui/icons'

import { AddActer } from '@acter/components/acter/add-acter'
import { ActerIcon, HomeIcon, SearchIcon } from '@acter/components/icons'
import { Locales } from '@acter/components/layout/side-bar/locales'
import { FollowingList } from '@acter/components/molecules/following-list'
import { ProfileButton } from '@acter/components/molecules/profile-button'
import { commonStyles } from '@acter/components/organisms/side-bar/common'
import { Link } from '@acter/components/util/anchor-link'
import { useUser } from '@acter/lib/user/use-user'

export const Sidebar: FC = () => {
  const classes = useStyles()
  const router = useRouter()
  const { user } = useUser()
  return (
    <Box className={classes.root}>
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

          {user && (
            <>
              <Divider />
              <FollowingList />
              <AddActer />
            </>
          )}
        </List>
      </Box>

      <Locales />

      <Hidden smDown>
        <Divider />
        <Box className={classes.profileItem}>
          <ProfileButton />
        </Box>
      </Hidden>
    </Box>
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
    root: {
      height: '100%',
      width: theme.spacing(theme.mixins.sidebar.primaryWidth),
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.contrastText,
      display: 'flex',
      flexDirection: 'column',
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
      paddingBottom: 0,
    },
    profileItem: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      locales: {
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: 12,
        color: theme.colors.white,
        marginBottom: theme.spacing(1),
        paddingRight: 8,
        paddingLeft: 8,
      },
    },
  })
)

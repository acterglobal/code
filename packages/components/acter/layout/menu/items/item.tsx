import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { SvgIconComponent } from '@mui/icons-material'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Theme,
  useTheme,
  Box,
} from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import clsx from 'clsx'

import { commonStyles } from '@acter/components/organisms/side-bar/common'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { getLandingPageTab } from '@acter/lib/acter/get-landing-page-tab'
import { ActerMenu as Path } from '@acter/lib/constants'
import { useUpdateNotifications } from '@acter/lib/notification/use-update-notifications'
import { Acter, Notification } from '@acter/schema'

interface ActerMenuItemProps {
  acter: Acter
  Icon: SvgIconComponent
  path: Path
  text?: string
  notifications?: Notification[]
}

export const ActerMenuItem: FC<ActerMenuItemProps> = ({
  acter,
  Icon,
  path,
  text,
  notifications,
}) => {
  const classes = useStyles()
  const theme = useTheme()
  const router = useRouter()

  const tab = getLandingPageTab()

  const isActive = router.query.slug === acter.slug && path === tab

  const [_, updateNotifications] = useUpdateNotifications()

  const handleClick = () => {
    if (notifications?.length > 0) {
      updateNotifications(notifications?.map((notification) => notification.id))
    }
  }

  return (
    <ListItem
      className={clsx({
        [classes.item]: true,
        [classes.currentItem]: isActive,
      })}
      aria-current={isActive}
      onClick={handleClick}
    >
      <Link href={acterAsUrl({ acter, extraPath: [path] })}>
        <ListItemIcon>
          <Icon
            className={classes.icon}
            htmlColor={
              isActive
                ? theme.palette.background.paper
                : theme.palette.grey.A100
            }
            fontSize={isActive ? 'large' : 'medium'}
          />
        </ListItemIcon>
        <ListItemText
          className={classes.itemText}
          primary={text ? text : path}
        />
        <ListItemIcon>
          {notifications?.length > 0 && (
            <Box className={classes.notifyBadge}></Box>
          )}
        </ListItemIcon>
      </Link>
    </ListItem>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    item: {
      ...commonStyles(theme).item,
      marginBottom: theme.spacing(0.5),
    },
    currentItem: {
      '& .MuiListItemText-primary': {
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.background.paper,
      },
    },
    icon: {
      height: theme.spacing(2),
      width: theme.spacing(3),
    },
    itemText: {
      '& .MuiListItemText-primary': {
        '&:hover': {
          color: theme.palette.background.paper,
        },
      },
      textTransform: 'capitalize',
    },
    notifyBadge: {
      height: 10,
      width: 10,
      borderRadius: '50%',
      backgroundColor: theme.palette.error.light,
      alignSelf: 'flex-end',
    },
  })
)

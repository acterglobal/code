import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Link } from '@acter/components/util/anchor-link'
import clsx from 'clsx'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  createStyles,
  makeStyles,
  Theme,
  useTheme,
  Box,
} from '@material-ui/core'
import { SvgIconComponent } from '@material-ui/icons'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Acter, Notification } from '@acter/schema'
import { commonStyles } from '@acter/components/layout/side-bar/common'
import { ActerMenu } from '@acter/lib/constants'
import { getLandingPageTab } from '@acter/lib/acter/get-landing-page-tab'
import { useUpdateNotifications } from '@acter/lib/notification/use-update-notifications'

interface ActerMenuItemProps {
  acter: Acter
  Icon: SvgIconComponent
  path: string
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

  const tab = getLandingPageTab(router, ActerMenu.FORUM)

  const isActive = router.query.acterType !== 'groups' && path === tab

  const [updateNotifications] = useUpdateNotifications()

  const handleClick = () =>
    notifications?.map((notification) => updateNotifications(notification.id))

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
            color="inherit"
            className={classes.icon}
            style={{
              color: isActive ? theme.colors.white : null,
              fontWeight: isActive ? 'bold' : null,
            }}
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
    currentItem: {
      '& .MuiListItemText-primary': {
        fontWeight: theme.typography.fontWeightMedium,
        color: '#fff',
      },
    },
    icon: {
      height: theme.spacing(2),
    },
    itemText: {
      '& .MuiListItemText-primary': {
        '&:hover': {
          color: theme.colors.white,
        },
      },

      textTransform: 'capitalize',
    },
    notifyBadge: {
      height: 10,
      width: 10,
      borderRadius: '50%',
      backgroundColor: theme.colors.others.notificationBadge,
      alignSelf: 'flex-end',
    },
  })
)

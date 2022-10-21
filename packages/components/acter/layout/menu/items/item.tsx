import React, { FC } from 'react'

import { useRouter } from 'next/router'

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

import clsx from 'clsx'

import { commonStyles } from '@acter/components/organisms/side-bar/common'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { getLandingPageTab } from '@acter/lib/acter/get-landing-page-tab'
import { ActerMenu as Path } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
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
  const { t } = useTranslation('common')
  const classes = useStyles()
  const theme = useTheme()
  const router = useRouter()

  const tab = getLandingPageTab()

  const isActive = router.query.slug === acter.slug && path === tab

  const [_, updateOneNotifications] = useUpdateNotifications()

  const handleClick = () => {
    if (notifications?.length > 0) {
      updateOneNotifications(notifications?.map((notification) => notification.id))
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
          primary={text ? text : t(path)}
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
        color: theme.colors.white,
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

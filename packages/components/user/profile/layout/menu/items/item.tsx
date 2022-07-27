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
} from '@material-ui/core'
import { SvgIconComponent } from '@material-ui/icons'

import clsx from 'clsx'

import { commonStyles } from '@acter/components/organisms/side-bar/common'
import { Link } from '@acter/components/util/anchor-link'
import { useUser } from '@acter/lib/user/use-user'

interface ProfileMenuItemProps {
  Icon: SvgIconComponent
  path: string
  label: string
}

export const ProfileMenuItem: FC<ProfileMenuItemProps> = ({
  path,
  label,
  Icon,
}) => {
  const classes = useStyles()
  const theme = useTheme()

  const { user } = useUser()

  const href = `/profile/${path}`
  const router = useRouter()

  if (!user) return null

  const isActive = router.asPath === href

  return (
    <ListItem
      className={clsx({
        [classes.item]: true,
        [classes.currentItem]: isActive,
      })}
      aria-current={isActive}
    >
      <Link href={href}>
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
        <ListItemText className={classes.itemText} primary={label} />
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
  })
)

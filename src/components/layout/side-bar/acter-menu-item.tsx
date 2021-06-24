import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { Link } from 'src/components/util/anchor-link'
import clsx from 'clsx'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { SvgIconComponent } from '@material-ui/icons'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Acter } from '@schema'
import { commonStyles } from 'src/components/layout/side-bar/common'
import { ActerMenu } from '@acter/lib/constants'
import { getLandingPageTab } from '@acter/lib/acter/get-landing-page-tab'

interface ActerMenuItemProps {
  acter: Acter
  Icon: SvgIconComponent
  path: string
  text?: string
}

export const ActerMenuItem: FC<ActerMenuItemProps> = ({
  acter,
  Icon,
  path,
  text,
}) => {
  const classes = useStyles()
  const router = useRouter()

  const tab = getLandingPageTab(router, ActerMenu.FORUM)

  const isActive = path === tab

  return (
    <ListItem
      className={clsx({
        [classes.item]: true,
        [classes.currentItem]: isActive,
      })}
      aria-current={isActive}
    >
      <Link href={acterAsUrl(acter, path)}>
        <ListItemIcon>
          <Icon color="inherit" className={classes.icon} />
        </ListItemIcon>
        <ListItemText
          className={classes.itemText}
          primary={text ? text : path}
        />
      </Link>
    </ListItem>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    currentItem: {
      '& .MuiListItemText-primary': {
        fontWeight: theme.typography.fontWeightBold,
        color: '#fff',
      },
    },
    icon: {
      height: theme.spacing(2),
    },
    itemText: {
      '& .MuiListItemText-primary': {
        '&:hover': {
          color: '#fff',
        },
      },

      textTransform: 'capitalize',
    },
  })
)

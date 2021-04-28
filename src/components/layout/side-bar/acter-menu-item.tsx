import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'
import {
  MenuItem,
  ListItemIcon,
  ListItemText,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { SvgIconComponent } from '@material-ui/icons'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { Acter } from '@schema'
import { commonStyles } from 'src/components/layout/side-bar/common'
import { FEED } from 'src/constants'

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

  const isActive = router.query.tab?.includes(path)

  return (
    <MenuItem
      className={clsx({
        [classes.item]: true,
        [classes.currentItem]: isActive,
      })}
      aria-current={isActive}
    >
      <Link href={acterAsUrl(acter, path)}>
        <a>
          <ListItemIcon>
            <Icon color="inherit" />
          </ListItemIcon>
          <ListItemText primary={text ? text : path} />
        </a>
      </Link>
    </MenuItem>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    ...commonStyles(theme),
    currentItem: {
      backgroundColor: theme.palette.secondary[500],
    },
  })
)

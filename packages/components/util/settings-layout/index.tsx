import React, { FC } from 'react'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'

import {
  Grid,
  MenuList,
  MenuItem,
  MenuItemProps,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { capitalize } from '@acter/lib/string/capitalize'

export const SettingsContainer: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.container} container>
      {children}
    </Grid>
  )
}

export const SettingsMenu: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.menu} item xs={2}>
      <MenuList>{children}</MenuList>
    </Grid>
  )
}

interface SettingsMenuItemProps extends MenuItemProps {
  isActive?: boolean
}
export const SettingsMenuItem: FC<SettingsMenuItemProps> = (props) => {
  const classes = useStyles()
  const { isActive, ...restProps } = props
  return (
    <MenuItem
      {...restProps}
      className={clsx(classes.item, isActive && classes.activeItem)}
      button={false}
    >
      {props.children}
    </MenuItem>
  )
}

type SettingsLinkMenuItemProps = SettingsMenuItemProps & LinkProps
export const SettingsLinkMenuItem: FC<SettingsLinkMenuItemProps> = (props) => {
  const classes = useStyles()
  return (
    <SettingsMenuItem {...props}>
      <Link {...props}>
        <a className={classes.link}>
          {props.children && capitalize(props.children)}
        </a>
      </Link>
    </SettingsMenuItem>
  )
}

export const SettingsContent: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Grid className={classes.content} item xs={10}>
      {children}
    </Grid>
  )
}

export const SettingsSectionHeading: FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Typography className={classes.sectionHeading} variant="h2">
      {children}
    </Typography>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      padding: theme.spacing(4),
    },
    menu: {
      borderRight: `1px solid ${theme.colors.grey.main}`,
    },
    item: {},
    activeItem: {
      fontWeight: theme.typography.fontWeightBold,
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.secondary.main,
    },
    content: {
      paddingLeft: theme.spacing(5),
      '& h2': {},
    },
    sectionHeading: {
      width: '75%',
      fontSize: '1.2rem',
      paddingBottom: theme.spacing(1),
      marginBottom: theme.spacing(2),
      borderBottom: `1px solid ${theme.colors.grey.main}`,
    },
  })
)

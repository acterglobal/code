import React, { FC } from 'react'

import {
  Box,
  createStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
  Tooltip as MUITooltip,
  withStyles,
} from '@material-ui/core'

import clsx from 'clsx'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Acter } from '@acter/schema'

interface NetworksListProps {
  followingActers: Acter[]
}

export const NetworksList: FC<NetworksListProps> = ({ followingActers }) => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      {followingActers.map((acter) => (
        <ListItem className={classes.item} disableGutters>
          <Link href={acterAsUrl({ acter })}>
            <ListItemAvatar>
              <ActerAvatar size={2.3} acter={acter} />
            </ListItemAvatar>

            {acter.name.length > 15 ? (
              <Tooltip title={acter.name} arrow>
                <ListItemText
                  classes={{ primary: clsx(classes.name, classes.toolTipText) }}
                  primary={acter.name}
                  primaryTypographyProps={{ noWrap: true }}
                />
              </Tooltip>
            ) : (
              <ListItemText
                classes={{ primary: classes.name }}
                primary={acter.name}
              />
            )}
          </Link>
        </ListItem>
      ))}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '100%',
      marginTop: theme.spacing(1),
      '& .MuiListItemAvatar-root': {
        minWidth: 0,
      },
      '& .MuiListItem-root': {
        padding: 0,
      },
    },
    item: {
      marginLeft: theme.spacing(2),
      cursor: 'pointer',
      '& a': {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.secondary.contrastText,
        textDecoration: 'none',
        '&:hover': {
          color: theme.colors.white,
        },
      },
    },
    name: {
      marginLeft: theme.spacing(1),
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.8rem',
    },
    toolTipText: {
      width: 115,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  })
)

const Tooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.colors.white,
    color: theme.palette.secondary.main,
    boxShadow: theme.shadows[1],
    fontSize: '0.7rem',
    marginTop: theme.spacing(1),
  },
  arrow: {
    color: theme.colors.white,
  },
}))(MUITooltip)

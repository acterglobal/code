import React, { FC } from 'react'

import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme,
} from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { Link } from '@acter/components/util/anchor-link'
import { Tooltip } from '@acter/components/util/tool-tip'
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
        <ListItem key={acter.id} className={classes.item} disableGutters>
          <Link href={acterAsUrl({ acter })}>
            <ListItemAvatar>
              <ActerAvatar size={2.3} acter={acter} />
            </ListItemAvatar>

            {acter.name.length > 18 ? (
              <Tooltip title={acter.name}>
                <ListItemText
                  classes={{ primary: classes.name }}
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
    },
    item: {
      marginLeft: theme.spacing(2),
      '& a': {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.secondary.contrastText,
        textDecoration: 'none',
        '&:hover': {
          color: theme.palette.background.paper,
        },
      },
    },
    name: {
      marginLeft: theme.spacing(0.7),
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.8rem',
      width: 125,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
  })
)

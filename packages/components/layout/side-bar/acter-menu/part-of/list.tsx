import React, { FC } from 'react'

import {
  Box,
  createStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core'

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
              <ActerAvatar size={2.5} acter={acter} />
            </ListItemAvatar>

            <ListItemText
              classes={{ primary: classes.name }}
              primary={acter.name}
            />
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
      marginLeft: theme.spacing(1.5),
      cursor: 'pointer',
      '& a': {
        display: 'flex',
        alignItems: 'center',
        color: theme.palette.secondary.contrastText,
        textDecoration: 'none',
        '&:hover': {
          color: '#fff',
        },
      },
    },
    name: {
      marginLeft: theme.spacing(1),
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.8rem',
    },
  })
)

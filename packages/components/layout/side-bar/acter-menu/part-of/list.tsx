import React, { FC } from 'react'

import {
  Box,
  capitalize,
  createStyles,
  ListItem,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

export const NetworkList: FC = () => {
  const classes = useStyles()
  const networks = ['network 1', 'network 2', 'network 3']
  return (
    <Box className={classes.container}>
      {networks.map((network) => (
        <ListItem className={classes.item}>
          <Typography className={classes.name} variant="body2">
            # {capitalize(network)}
          </Typography>
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
    },
    item: {
      '& a': {
        color: theme.palette.secondary.contrastText,
        textDecoration: 'none',
        '&:hover': {
          color: '#fff',
        },
      },
    },
    name: {
      fontWeight: theme.typography.fontWeightLight,
      fontSize: '0.8rem',
    },
    active: {
      color: theme.colors.white,
      fontWeight: theme.typography.fontWeightMedium,
    },
  })
)

import React, { FC } from 'react'

import {
  Box,
  createStyles,
  Divider,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { NetworkList } from './list'

export const PartOfSection: FC = () => {
  const classes = useStyles()

  return (
    <>
      <Divider className={classes.divider} />

      <Box className={classes.heading}>
        <Typography className={classes.text} variant="caption">
          Part of
        </Typography>
      </Box>

      <NetworkList />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
    },
    heading: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      display: 'flex',
      justifyContent: 'space-between',
    },
    text: {
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.contrastText,
    },
  })
)

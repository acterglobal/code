import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Acter } from '@schema'
import clsx from 'clsx'

export interface HeaderSectionProps {
  acter: Acter
}

export const HeaderSection: FC<HeaderSectionProps> = ({ acter }) => {
  const classes = useStyles()

  return (
    <Box className={classes.heading}>
      <Box>
        <Typography
          className={classes.name}
          variant="subtitle1"
        >{`# ${acter.name}`}</Typography>
      </Box>

      <Box className={classes.tabs}>
        <Box className={classes.tabs}>
          <Box className={classes.button}>Chat</Box>
          <Box className={classes.button}>Members</Box>
          <Box className={classes.button}>Activities</Box>
        </Box>
        <Box className={clsx(classes.button, classes.join)}>Join</Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      height: theme.spacing(7),
      borderBottom: '1px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    name: {
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightBold,
    },
    tabs: {
      display: 'flex',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'white',
      width: theme.spacing(15),
      padding: theme.spacing(0.7),
      margin: theme.spacing(0.7),
      borderRadius: theme.spacing(2),
      textAlign: 'center',
      fontSize: '0.7rem',
      cursor: 'pointer',
    },
    join: {
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      width: theme.spacing(13),
      marginLeft: theme.spacing(3),
    },
  })
)

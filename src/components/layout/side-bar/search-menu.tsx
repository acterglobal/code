import React from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { LanguageOutlined as WorldIcon } from '@material-ui/icons'
import clsx from 'clsx'
export const SearchMenu = () => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Box className={classes.heading}>
        <WorldIcon fontSize="large" />
        <Typography variant="caption">Public search</Typography>
      </Box>

      <Box className={classes.tabs}>
        <Box className={classes.tab}>
          <Typography className={classes.activeTab} variant="body2">
            Acters
          </Typography>
        </Box>
        <Box className={classes.tab}>
          <Typography variant="body2">Activities</Typography>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary[700],
      height: '100%',
      width: '15rem',
      color: theme.palette.secondary.contrastText,
    },
    heading: {
      height: theme.spacing(8),
      padding: theme.spacing(2),
      borderBottom: '1px solid white',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    tabs: {
      height: theme.spacing(6),
      //   backgroundColor: theme.palette.secondary[600],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tab: {
      width: '100%',
      //   textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    activeTab: {
      height: '100%',
      backgroundColor: theme.palette.secondary[500],
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)

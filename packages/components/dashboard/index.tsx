import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Typography,
  Theme,
  useTheme,
} from '@material-ui/core'

import { DashboardContent } from '@acter/components/dashboard/content'
import { HomeIcon } from '@acter/components/icons/home-icon'

export const Dashboard: FC = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
    <Box className={classes.container}>
      <Box className={classes.topSection}>
        <HomeIcon
          color="inherit"
          style={{
            color: theme.palette.secondary.main,
            fontWeight: 'bold',
            fontSize: 30,
          }}
        />
        <Typography variant="h6" className={classes.heading}>
          Dashboard
        </Typography>
      </Box>
      <DashboardContent />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.colors.white,
    },
    topSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heading: {
      fontSize: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main,
      marginLeft: theme.spacing(1),
    },
  })
)

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
import { NotLoggedInMessage } from '@acter/components/errors'
import { HomeIcon } from '@acter/components/icons/home-icon'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useUser } from '@acter/lib/user/use-user'

export const Dashboard: FC = () => {
  const classes = useStyles()

  const { user, fetching } = useUser()

  if (fetching) return <LoadingSpinner />

  return (
    <Box className={classes.container}>
      {!user ? (
        <NotLoggedInMessage />
      ) : (
        <>
          <TopSection />
          <DashboardContent />
        </>
      )}
    </Box>
  )
}

const TopSection: FC = () => {
  const classes = useStyles()
  const theme = useTheme()

  return (
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
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      backgroundColor: theme.colors.white,
      minHeight: '100vh',
    },
    topSection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 100,
      top: 0,
      width: '100%',
      height: 52,
      backgroundColor: theme.colors.white,
    },
    heading: {
      fontSize: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main,
      marginLeft: theme.spacing(1),
    },
  })
)

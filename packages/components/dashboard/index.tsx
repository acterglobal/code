import React, { FC } from 'react'
import {
  Box,
  Typography,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core'
import { flattenFollowing } from '@acter/lib/acter/flatten-following'
import { ActerListByType } from '@acter/components/acter/list-by-type'
import { DefaultMessage } from '@acter/components/dashboard/default-message'

import { User } from '@acter/schema/types'
import { makeStyles } from '@material-ui/core'
import { HomeIcon } from '@acter/components/icons/home-icon'
export interface DashboardProps {
  user: User
}

export const Dashboard: FC<DashboardProps> = ({ user }) => {
  const classes = useStyles()
  const acters = flattenFollowing(user.Acter)
  if (acters.length === 0) {
    return <DefaultMessage />
  }
  return (
    <Box className={classes.container}>
      <Box className={classes.topSection}>
        <HomeIcon color="inherit" style={{ color: 'red' }} />
        <Typography variant="h6" className={classes.heading}>
          Your dashboard
        </Typography>
      </Box>
      <ActerListByType acters={flattenFollowing(user.Acter)} />
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
      backgroundColor: 'yellow',
    },
    heading: {
      fontSize: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
    },
  })
)

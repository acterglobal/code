import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Typography,
  Theme,
  useTheme,
} from '@material-ui/core'
import { ActerWithSlugAndType } from '@acter/lib/acter/acter-as-url'
import { flattenFollowing } from '@acter/lib/acter/flatten-following'
import { DefaultMessage } from '@acter/components/dashboard/default-message'

import { User } from '@acter/schema'
import { HomeIcon } from '@acter/components/icons/home-icon'
import { DashboardContent } from '@acter/components/dashboard/content'

export interface DashboardProps {
  user: User
}

export const Dashboard: FC<DashboardProps> = ({ user }) => {
  const classes = useStyles()
  const theme = useTheme()

  const acters = flattenFollowing(user.Acter)
  if (acters.length === 0) {
    return <DefaultMessage />
  }

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
      <DashboardContent acters={acters as ActerWithSlugAndType[]} />
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

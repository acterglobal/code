import React, { FC } from 'react'
import {
  Box,
  Typography,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core'
import { flattenFollowing } from 'src/lib/acter/flatten-following'
import { ActerListByType } from 'src/components/acter/list-by-type'
import { DefaultMessage } from 'src/components/dashboard/default-message'

import { User } from '@schema'
export interface DashboardProps {
  user: User
}

export const Dashboard: FC<DashboardProps> = ({ user }) => {
  const acters = flattenFollowing(user.Acter)
  if (acters.length === 0) {
    return <DefaultMessage />
  }
  return (
    <StyledContainer>
      <StyledContentContainer>
        <Typography variant="h4">Dashboard</Typography>
        <Typography variant="subtitle1">
          Here are the Organisations, Networks and Activities to which you are
          connected.
        </Typography>
      </StyledContentContainer>
      <ActerListByType acters={flattenFollowing(user.Acter)} />
    </StyledContainer>
  )
}

const StyledContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(2),
    },
  })
)(Box)

const StyledContentContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      borderColor: theme.palette.divider,
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderRadius: theme.spacing(1),
      padding: theme.spacing(2),
    },
  })
)(Box)

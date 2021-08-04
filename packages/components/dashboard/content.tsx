import React, { FC } from 'react'
import { Acter, User } from '@acter/schema'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Divider,
} from '@material-ui/core'
import { ActerTypes } from '@acter/lib/constants'
import { GroupsList } from '@acter/components/dashboard/groups-list'
import { ActivitiesList } from '@acter/components/dashboard/activities-list'

const { GROUP } = ActerTypes

export type DashboardContentProps = { acters: Acter[]; user: User }

export const DashboardContent: FC<DashboardContentProps> = ({
  acters,
  user,
}) => {
  const classes = useStyles()
  const groups = acters.filter((acter) => acter.ActerType.name === GROUP)
  const activities = acters
    .filter((acter) => acter.ActerType.name === ActerTypes.ACTIVITY)
    .map((acter) => acter.Activity)

  return (
    <Box className={classes.container}>
      <Box className={classes.groups}>
        <Heading title="My Groups" />
        <GroupsList groups={groups} />
      </Box>
      <Box className={classes.activities}>
        <Heading title="My Activities" />
        <ActivitiesList user={user} />
      </Box>
    </Box>
  )
}

type HeadingProps = { title: string }
const Heading: FC<HeadingProps> = ({ title }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h6" className={classes.heading}>
        {title}
      </Typography>
      <Divider className={classes.divider} />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      marginTop: theme.spacing(4),
    },
    groups: {
      width: 260,
      marginLeft: theme.spacing(4),
    },
    activities: {
      width: '100%',
      marginLeft: theme.spacing(5),
      paddingRight: theme.spacing(1),
    },
    heading: {
      fontSize: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.secondary.main,
      marginBottom: theme.spacing(1),
    },
    divider: {
      backgroundColor: theme.palette.secondary.main,
      marginBottom: theme.spacing(1),
    },
  })
)

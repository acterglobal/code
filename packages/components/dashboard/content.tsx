import React, { FC, useState } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
  Divider,
} from '@material-ui/core'

import { ActivitiesList } from '@acter/components/activity/list'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { GroupsList } from '@acter/components/dashboard/groups-list'
import { ActivitiesDateFilters } from '@acter/components/search/molecules/date-filters'
import { flattenFollowing } from '@acter/lib/acter/flatten-following'
import { useActivities } from '@acter/lib/activity/use-activities'
import { ActivitiesDateFilter } from '@acter/lib/constants'
import { ActerTypes } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { useUser } from '@acter/lib/user/use-user'

const { ACTIVITY, GROUP } = ActerTypes

export const DashboardContent: FC = () => {
  const classes = useStyles()
  const { t } = useTranslation('dashboard')
  const [currentDateFilter, setCurrentDateFilter] =
    useState<ActivitiesDateFilter>(ActivitiesDateFilter.UPCOMING)

  const { user } = useUser()

  const { activities, fetching: activitiesLoading } = useActivities({
    followerId: user?.Acter?.id,
    dateFilter: currentDateFilter,
  })

  if (activitiesLoading) return <LoadingSpinner />

  if (!user) return null

  const acters = flattenFollowing(user?.Acter)
  const groups = acters.filter((acter) => acter.ActerType.name === GROUP)

  const handleDateFilter = (dateFilter: ActivitiesDateFilter) => {
    if (dateFilter === currentDateFilter) return
    setCurrentDateFilter(dateFilter)
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.groups}>
        <Heading title={t('myGroups')} />
        <Box className={classes.content}>
          {groups.length === 0 ? (
            <ZeroMessage messageFor={GROUP} />
          ) : (
            <GroupsList groups={groups} />
          )}
        </Box>
      </Box>

      <Box className={classes.activities}>
        <Heading title={t('myActivities')} />
        <Box className={classes.content}>
          {activities ? (
            <>
              {activities.length === 0 ? (
                <ZeroMessage messageFor={ACTIVITY} />
              ) : (
                <>
                  <ActivitiesDateFilters
                    currentDateFilter={currentDateFilter}
                    onChange={handleDateFilter}
                  />
                  <ActivitiesList activities={activities} />
                </>
              )}
            </>
          ) : null}
        </Box>
      </Box>
    </Box>
  )
}

type HeadingProps = { title: string }
const Heading: FC<HeadingProps> = ({ title }) => {
  const classes = useStyles()
  return (
    <Box className={classes.headingSection}>
      <Typography variant="h6" className={classes.heading}>
        {title}
      </Typography>
      <Divider className={classes.divider} />
    </Box>
  )
}

const ZeroMessage = ({ messageFor }) => {
  const classes = useStyles()
  const { t } = useTranslation('dashboard')
  return (
    <Typography variant="body2" className={classes.zeroMessage}>
      {messageFor === GROUP && t('zeroMessage.groups')}
      {messageFor === ACTIVITY && t('zeroMessage.activities')}
    </Typography>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      width: '100%',
    },
    groups: {
      width: 260,
      marginLeft: theme.spacing(4),
    },
    activities: {
      marginLeft: theme.spacing(5),
      paddingRight: theme.spacing(1),
    },
    headingSection: {
      marginTop: 50,
      width: '100%',
      backgroundColor: theme.palette.background.default,
      position: 'fixed',
      zIndex: 99,
      textTransform: 'capitalize',
      boxShadow: '2px 4px 2px -2px rgb(0, 0, 0, .1)',
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
    zeroMessage: {
      width: 250,
      fontStyle: 'italic',
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.main,
    },
    content: {
      marginTop: 100,
    },
  })
)

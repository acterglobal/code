import React, { FC, useState } from 'react'

import { Box, createStyles, withStyles } from '@material-ui/core'

import { AddActivitySection } from '@acter/components/activity/add-activity-section'
import { ActivitiesList } from '@acter/components/activity/list'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { ActivitiesDateFilters } from '@acter/components/search/molecules/date-filters'
import { useActer } from '@acter/lib/acter/use-acter'
import { useActivities } from '@acter/lib/activity/use-activities'
import { ActivitiesDateFilter } from '@acter/lib/constants'

export const ActivitiesSection: FC = () => {
  const [currentDateFilter, setCurrentDateFilter] =
    useState<ActivitiesDateFilter>(ActivitiesDateFilter.UPCOMING)
  const { acter, fetching: acterFetching } = useActer()
  const { activities, fetching: activitiesFetching } = useActivities({
    followerId: acter?.id,
    dateFilter: currentDateFilter,
  })

  if (acterFetching || activitiesFetching) return <LoadingSpinner />
  if (!acter || !activities) return null

  const handleDateFilter = (dateFilter: ActivitiesDateFilter) => {
    if (dateFilter === currentDateFilter) return
    setCurrentDateFilter(dateFilter)
  }
  return (
    <>
      <TopSection>
        <AddActivitySection />
      </TopSection>
      <ActivitiesDateFilters
        currentDateFilter={currentDateFilter}
        onChange={handleDateFilter}
      />
      <ActivitiesList activities={activities} />
    </>
  )
}

const TopSection = withStyles(() =>
  createStyles({
    root: {
      paddingLeft: 8,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
)(Box)

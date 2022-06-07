import React, { FC, useState } from 'react'

import {
  Box,
  Checkbox,
  FormControlLabel,
  createStyles,
  withStyles,
} from '@material-ui/core'

import { AddActivitySection } from '@acter/components/activity/add-activity-section'
import { ActivitiesList } from '@acter/components/activity/list'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import {
  getActivitiesAfterDate,
  sortActivitiesByStartAt,
} from '@acter/lib/activity/get-activities-for-acter'
import { useActivities } from '@acter/lib/activity/use-activities'
import { useTranslation } from '@acter/lib/i18n/use-translation'

export const ActivitiesSection: FC = () => {
  const { t } = useTranslation('common')
  const [showPastActivities, setShowPastActivities] = useState(false)
  const { acter, fetching: acterFetching } = useActer()
  const { activities, fetching: activitiesFetching } = useActivities({
    followerId: acter?.id,
  })

  if (acterFetching || activitiesFetching) return <LoadingSpinner />
  if (!acter || !activities) return null

  const allActivities = sortActivitiesByStartAt(activities)
  const futureActivities = getActivitiesAfterDate(allActivities, new Date())

  const displayActivities = showPastActivities
    ? allActivities
    : futureActivities

  return (
    <>
      <TopSection>
        <AddActivitySection />

        <FormControlsContainer>
          <FormControlLabel
            control={
              <Checkbox
                checked={showPastActivities}
                onChange={(evt) => setShowPastActivities(evt.target.checked)}
                name="showPastActivities"
              />
            }
            label={t('showPastActivities')}
          />
        </FormControlsContainer>
      </TopSection>

      <ActivitiesList activities={displayActivities} />
    </>
  )
}

const FormControlsContainer = withStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  })
)(Box)

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

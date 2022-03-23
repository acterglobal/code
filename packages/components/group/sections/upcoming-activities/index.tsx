import React, { FC } from 'react'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { SectionContainer } from '@acter/components/group/sections/container'
import { UpcomingActivity } from '@acter/components/group/sections/upcoming-activities/upcoming-activity'
import { ZeroMessage } from '@acter/components/group/sections/zero-message'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'
import { getUpcomingActivities } from '@acter/lib/activity/get-activities-for-acter'
import { useActivities } from '@acter/lib/activity/use-activities'
import { ActerTypes } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'

export const UpcomingActivities: FC = () => {
  const { t } = useTranslation('group-landing', {
    keyPrefix: 'upcomingActivities',
  })
  const { acter } = useActer()
  const { activities, fetching: activitiesFetching } = useActivities(acter?.id)

  if (!activities || !acter) return null

  const upcomingActivities = getUpcomingActivities(activities, 2)

  return (
    <SectionContainer
      title={t('title')}
      buttonText={t('buttonText')}
      addItem={ActerTypes.ACTIVITY}
    >
      {activitiesFetching ? (
        <LoadingSpinner />
      ) : upcomingActivities?.length === 0 ? (
        <ZeroMessage
          addItem={ActerTypes.ACTIVITY}
          primaryText={t('zeroMessage.primaryText')}
          secondaryText={t('zeroMessage.secondaryText')}
          buttonText={t('zeroMessage.buttonText')}
        />
      ) : (
        <>
          {upcomingActivities.map((activity) => (
            <Link
              key={`activity-${activity.id}`}
              href={acterAsUrl({ acter: activity?.Acter })}
            >
              <UpcomingActivity activity={activity} />
            </Link>
          ))}
        </>
      )}
    </SectionContainer>
  )
}

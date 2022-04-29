import React, { FC } from 'react'

import { MjmlColumn, MjmlSection, MjmlText } from 'mjml-react'

import { activityDateFormat } from '@acter/lib/activity/date-format'
import { getArticle } from '@acter/lib/string/get-article'
import { Acter, Activity } from '@acter/schema'

export interface ActivityEmailBlockProps {
  acter: Acter
  activity: Activity
}

export const ActivityEmailBlock: FC<ActivityEmailBlockProps> = ({
  activity,
  acter,
}) => {
  const acterName = acter.name
  const acterType = acter.ActerType?.name?.toLocaleLowerCase()
  const aAn = getArticle(acterType)
  const activityName = activity.Acter.name
  const activityType = activity.ActivityType?.name?.toLocaleLowerCase()

  return (
    <MjmlSection backgroundColor="#fff">
      <MjmlColumn>
        <MjmlText fontFamily="Montserrat, Arial, non-serif">
          <p>
            A new {activityType}, {activityName}, was added to {aAn} {acterType}{' '}
            you follow on Acter, {acterName}.
          </p>

          <p>{activity.Acter.description}</p>

          <p>It will occur {activityDateFormat(activity)}</p>

          <p>Created by {activity.createdByUser.Acter.name}</p>
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  )
}

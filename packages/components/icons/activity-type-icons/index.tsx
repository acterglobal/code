import React, { FC } from 'react'

import { EventActivityIcon } from '@acter/components/icons/activity-type-icons/event-activity-icon'
import { IdeaActivityIcon } from '@acter/components/icons/activity-type-icons/idea-activity-icon'
import { MeetingActivityIcon } from '@acter/components/icons/activity-type-icons/meeting-activity-icon'
import { ProjectActivityIcon } from '@acter/components/icons/activity-type-icons/project-activity-icon'
import { Activity } from '@acter/schema'

const iconComponents = {
  event: EventActivityIcon,
  project: ProjectActivityIcon,
  meeting: MeetingActivityIcon,
  idea: IdeaActivityIcon,
}

interface ActivityTypeIconProps {
  activity: Activity
}

export const ActivityTypeIcon: FC<ActivityTypeIconProps> = ({ activity }) => {
  const Icon = iconComponents[activity?.ActivityType?.name]

  return <Icon activity={activity} />
}

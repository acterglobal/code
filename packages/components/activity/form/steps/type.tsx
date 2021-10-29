import React, { FC } from 'react'

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { NavigateNextOutlined } from '@material-ui/icons'

import clsx from 'clsx'
import { useFormikContext } from 'formik'

import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActivityTypes } from '@acter/lib/activity-types/use-activity-types'
import { capitalize } from '@acter/lib/string/capitalize'

export interface ActivityTypeStepProps {
  onClick: (activityTypeId: string) => void
}

export interface ActivityTypeStepValues {
  activityTypeId: string
}

export const ActivityTypeStep: FC<ActivityTypeStepProps> = ({ onClick }) => {
  const classes = useStyles()
  const { activityTypes, fetching } = useActivityTypes()

  if (fetching) return <LoadingSpinner />
  if (!activityTypes) return null

  const { setFieldValue } = useFormikContext()
  const handleClick = (activityTypeId: string) => {
    setFieldValue('activityTypeId', activityTypeId)
    onClick(activityTypeId)
  }
  return (
    <List>
      {activityTypes.map((type) => (
        <ListItem
          key={`activity-type-${type.id}`}
          className={clsx(classes.activityListItem, classes[type.name])}
          button={true}
          onClick={() => handleClick(type.id)}
        >
          <ListItemText>{capitalize(type.name)}</ListItemText>
          <ListItemSecondaryAction>
            <NavigateNextOutlined />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    activityListItem: {
      borderColor: theme.palette.divider,
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: theme.spacing(0.8),
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      '& 	.MuiListItemText-primary': {
        fontWeight: theme.typography.fontWeightBold,
        fontSize: 14,
      },
    },
    event: {
      color: theme.colors.activityTypes.dark.event,
    },
    project: {
      color: theme.colors.activityTypes.dark.project,
    },
    idea: {
      color: theme.colors.activityTypes.dark.idea,
    },
    meeting: {
      color: theme.colors.grey.dark,
    },
  })
)

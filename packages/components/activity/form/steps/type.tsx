import React, { FC } from 'react'
import clsx from 'clsx'
import { useFormikContext } from 'formik'
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { activityTypeColors } from '@acter/components/themes/colors'
import { NavigateNextOutlined } from '@material-ui/icons'

import { ActivityType } from '@schema'

export interface ActivityTypeStepProps {
  activityTypes: ActivityType[]
  onClick: () => void
}

export interface ActivityTypeStepValues {
  activityTypeId: string
}

export const ActivityTypeStep: FC<ActivityTypeStepProps> = ({
  activityTypes,
  onClick,
}) => {
  const classes = useStyles()
  const { setFieldValue } = useFormikContext()
  const handleClick = (value) => {
    setFieldValue('activityTypeId', value)
    onClick()
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
          <ListItemText>{type.name}</ListItemText>
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
      borderRadius: theme.spacing(1),
      padding: theme.spacing(2),
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'capitalize',
    },
    // TODO: move these to the theme
    event: {
      color: activityTypeColors.event,
    },
    project: {
      color: activityTypeColors.project,
    },
    idea: {
      color: activityTypeColors.idea,
    },
  })
)
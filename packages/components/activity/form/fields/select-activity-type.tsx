import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import { grey } from '@material-ui/core/colors'
import { ActivityType } from '@acter/schema/types'
import { activityTypeBackgroundColors } from '@acter/components/themes/colors'
import { ActivityTypes } from '@acter/lib/constants'

export interface SelectActivityTypeProps {
  activityTypes: ActivityType[]
  selectedTypeId: string
  onChange: (typeTd: string) => void
}

export const SelectActivityType: FC<SelectActivityTypeProps> = ({
  activityTypes,
  selectedTypeId,
  onChange,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      {activityTypes.map((type, i) => {
        if (type.name !== ActivityTypes.MEETING) {
          return (
            <Box
              key={`activity-type-${type.id}`}
              className={clsx(classes.button, classes[`button${i}`])}
              style={{
                border: selectedTypeId === type.id && 0,
                backgroundColor:
                  selectedTypeId === type.id &&
                  activityTypeBackgroundColors[type.name],
              }}
              onClick={() => onChange(type.id)}
            >
              {type.name}
            </Box>
          )
        }
      })}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      display: 'flex',
      marginBottom: theme.spacing(2),
    },
    button: {
      flexGrow: 1,
      padding: theme.spacing(0.5),
      border: '1px solid',
      borderColor: grey[400],
      borderRadius: 4,
      textTransform: 'capitalize',
      textAlign: 'center',
      '&:hover': {
        cursor: 'pointer',
      },
    },
    button0: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    button1: {
      borderRight: 0,
      borderLeft: 0,
      borderRadius: 0,
    },
    button2: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  })
)

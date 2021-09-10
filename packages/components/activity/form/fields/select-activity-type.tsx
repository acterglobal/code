import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useActivityTypes } from '@acter/lib/activity-types/use-activity-types'
import { ActivityTypes } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
import { LoadingSpinner } from '@acter/components/util/load-spinner'
export interface SelectActivityTypeProps {
  selectedTypeId: string
  onChange: (typeTd: string) => void
}

export const SelectActivityType: FC<SelectActivityTypeProps> = ({
  selectedTypeId,
  onChange,
}) => {
  const classes = useStyles()
  const { activityTypes, loading } = useActivityTypes()

  if (loading) return <LoadingSpinner />
  if (!activityTypes) return null

  return (
    <Box className={classes.root}>
      {activityTypes.map((type, i) => {
        if (type.name !== ActivityTypes.MEETING) {
          return (
            <Box
              key={`activity-type-${type.id}`}
              className={clsx(
                classes.button,
                classes[`button${i}`],
                selectedTypeId === type.id && classes[type.name]
              )}
              onClick={() => onChange(type.id)}
            >
              {capitalize(type.name)}
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
      borderColor: theme.palette.secondary.light,
      borderRadius: 4,
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
    event: {
      border: 0,
      backgroundColor: theme.colors.activityTypes.event,
    },
    project: {
      border: 0,
      backgroundColor: theme.colors.activityTypes.project,
    },
    idea: {
      border: 0,
      backgroundColor: theme.colors.activityTypes.idea,
    },
  })
)

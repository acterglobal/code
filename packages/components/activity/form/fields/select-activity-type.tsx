import React, { FC, useEffect, useState } from 'react'

import { Theme } from '@mui/material'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { blueGrey } from '@acter/components/themes/colors'
import { useActivityTypes } from '@acter/lib/activity-types/use-activity-types'
import { ActivityTypes } from '@acter/lib/constants'

export interface SelectActivityTypeProps {
  selectedTypeId: string
  onChange: (typeTd: string) => void
}

export const SelectActivityType: FC<SelectActivityTypeProps> = ({
  selectedTypeId,
  onChange,
}) => {
  const { activityTypes, fetching } = useActivityTypes()
  if (fetching) return <LoadingSpinner />
  if (!activityTypes) return null

  const [color, setColor] = useState<ActivityTypes>()

  const classes = useStyles({ color })

  useEffect(() => {
    const activityType = activityTypes.find(
      (type) => type.id === selectedTypeId
    )
    setColor(activityType.name as ActivityTypes)
  }, [selectedTypeId])

  return (
    <ToggleButtonGroup
      className={classes.buttons}
      value={selectedTypeId}
      exclusive
      onChange={(e, id) => onChange(id)}
    >
      {activityTypes.map((type) => {
        if (type.name !== ActivityTypes.MEETING) {
          return (
            <ToggleButton
              className={classes.button}
              value={type.id}
              key={type.id}
            >
              {type.name}
            </ToggleButton>
          )
        }
      })}
    </ToggleButtonGroup>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttons: {
      width: '100%',
      marginBottom: theme.spacing(2),
      '& .MuiToggleButton-root.Mui-selected': {
        backgroundColor: ({ color }: { color: ActivityTypes }) =>
          theme.palette.activityTypes[color],
        borderColor: ({ color }: { color: ActivityTypes }) =>
          theme.palette.activityTypes[color],
      },
    },
    button: {
      width: '33.39%',
      color: blueGrey.A200,
    },
  })
)

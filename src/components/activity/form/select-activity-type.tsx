import React, { FC } from 'react'
import { Box } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import clsx from 'clsx'
import { grey } from '@material-ui/core/colors'
import { ActivityType } from '@schema'
import { activityTypeColors } from 'src/themes/colors'

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
      {activityTypes.map((type, i) => (
        <Box
          key={i}
          className={clsx(
            classes.button,
            i === 0 && classes.leftButton,
            i === 1 && classes.middleButton,
            i === 2 && classes.rightButton
          )}
          style={{
            backgroundColor:
              selectedTypeId === type.id && activityTypeColors[type.name],
            border: selectedTypeId === type.id && 0,
          }}
          onClick={() => onChange(type.id)}
        >
          {type.name}
        </Box>
      ))}
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
    leftButton: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
    middleButton: {
      borderRight: 0,
      borderLeft: 0,
      borderRadius: 0,
    },
    rightButton: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
  })
)

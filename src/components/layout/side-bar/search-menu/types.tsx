import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Switch } from 'src/components/styled/switch'
import { ActerType, ActivityType } from '@schema'

export interface SearchTypesProps {
  acterTypes?: ActerType[]
  activityTypes?: ActivityType[]
}

export const SearchTypes: FC<SearchTypesProps> = ({
  acterTypes,
  activityTypes,
}) => {
  const classes = useStyles()
  console.log('acter types ', acterTypes)
  console.log('activity types ', activityTypes)
  return (
    <Box className={classes.root}>
      <Box className={classes.typeSection}>
        <Box className={classes.type}>
          <Box className={classes.icon}></Box>
          <Typography className={classes.typeName} variant="body1">
            Events
          </Typography>
        </Box>
        <Switch name="events" checked={true} handleSwitchChange={() => null} />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
    },
    typeSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    type: {
      display: 'flex',
      alignItems: 'center',
    },
    typeName: {
      marginLeft: theme.spacing(1.5),
      fontWeight: theme.typography.fontWeightLight,
    },
    icon: {
      height: 12,
      width: 12,
      borderRadius: '50%',
      backgroundColor: 'white',
    },
  })
)

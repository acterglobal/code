import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Switch } from 'src/components/styled/switch'
import { SearchType } from 'src/constants'
import { activityTypeColors } from 'src/themes/colors'
import { Size } from 'src/constants'

export interface TypeProps {
  activeTab: SearchType
  acterTypeName: string
}

export const Type: FC<TypeProps> = ({ activeTab, acterTypeName }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.type}>
        {activeTab === SearchType.ACTIVITIES && (
          <ActivityTypeIcon activityType={acterTypeName} />
        )}
        <Typography className={classes.typeName} variant="body2">
          {acterTypeName}s
        </Typography>
      </Box>
      <Switch
        name="events"
        size={Size.SMALL}
        checked={true}
        handleSwitchChange={() => null}
      />
    </Box>
  )
}

const ActivityTypeIcon = ({ activityType }) => {
  const classes = useStyles()
  return (
    <Box
      className={classes.icon}
      style={{ backgroundColor: activityTypeColors[activityType] }}
    ></Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing(1.5),
    },
    type: {
      display: 'flex',
      alignItems: 'center',
    },
    typeName: {
      marginLeft: theme.spacing(2),
      fontWeight: theme.typography.fontWeightLight,
      fontSize: theme.spacing(1.5),
      textTransform: 'capitalize',
    },
    icon: {
      height: 12,
      width: 12,
      borderRadius: '50%',
      backgroundColor: 'white',
    },
  })
)

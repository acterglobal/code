import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Switch } from 'src/components/styled/switch'
import { SearchType } from '@acter/lib/constants'
import { activityTypeColors } from 'src/themes/colors'
import { Size } from '@acter/lib/constants'
import { remove } from 'lodash'

export interface SearchTypeProps {
  filterSubTypes: string[]
  onChange: (acterTypeNames: string[]) => void
}
export interface TypeProps extends SearchTypeProps {
  activeTab: SearchType
  subTypeName: string
}

export const Type: FC<TypeProps> = ({
  activeTab,
  subTypeName,
  filterSubTypes,
  onChange,
}) => {
  const classes = useStyles()

  const handleChange = () => {
    const newFilterSubTypes = [...filterSubTypes]

    if (newFilterSubTypes.includes(subTypeName)) {
      remove(newFilterSubTypes, (item) => item === subTypeName)
      onChange([...newFilterSubTypes])
    } else {
      onChange([...newFilterSubTypes, subTypeName])
    }
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.type}>
        {activeTab === SearchType.ACTIVITIES && (
          <ActivityTypeIcon activityType={subTypeName} />
        )}
        <Typography className={classes.typeName} variant="body2">
          {subTypeName}s
        </Typography>
      </Box>
      <Switch
        name={subTypeName}
        size={Size.SMALL}
        checked={filterSubTypes.includes(subTypeName)}
        onChange={handleChange}
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

import React, { FC } from 'react'
import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'
import { Switch } from '@acter/components/styled/switch'
import { SearchType } from '@acter/lib/constants'
import { Size } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
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
  const type: string = subTypeName
  const classes = useStyles({ type })

  const handleChange = (addToList: boolean) => {
    if (addToList) {
      if (filterSubTypes.includes(subTypeName)) return
      return onChange([...filterSubTypes, subTypeName])
    }

    onChange(filterSubTypes.filter((name) => name !== subTypeName))
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.type}>
        {activeTab === SearchType.ACTIVITIES && (
          <Box className={classes.icon}></Box>
        )}
        <Typography className={classes.typeName} variant="body2">
          {capitalize(subTypeName)}s
        </Typography>
      </Box>
      <Switch
        name={subTypeName}
        size={Size.SMALL}
        checked={filterSubTypes?.includes(subTypeName)}
        onChange={handleChange}
      />
    </Box>
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
    },
    icon: {
      height: 12,
      width: 12,
      borderRadius: '50%',
      backgroundColor: ({ type }: { type: string }) =>
        type && theme.colors.activityTypes[type],
    },
  })
)

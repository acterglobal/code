import React, { FC } from 'react'

import {
  Box,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { Switch } from '@acter/components/styled/switch'
import { Size } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'

export interface SearchTypeProps {
  subTypeName: string
  checked: boolean
  showTypeIcon?: boolean
  onChange: (checked: boolean) => void
}

export const Type: FC<SearchTypeProps> = ({
  subTypeName,
  checked,
  showTypeIcon: useTypeColorDot = false,
  onChange,
}) => {
  const type: string = subTypeName
  const classes = useStyles({ type })

  return (
    <Box className={classes.root}>
      <Box className={classes.type}>
        {useTypeColorDot && <Box className={classes.icon}></Box>}
        <Typography className={classes.typeName} variant="body2">
          {capitalize(subTypeName)}s
        </Typography>
      </Box>
      <Switch
        name={subTypeName}
        size={Size.SMALL}
        checked={checked}
        onChange={onChange}
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

import React, { FC } from 'react'

import { Box, Theme, Typography } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { Switch } from '@acter/components/atoms/fields/switch'
import { Size } from '@acter/lib/constants'
import { capitalize } from '@acter/lib/string/capitalize'
import { pluralize } from '@acter/lib/string/pluralize'

export interface SubtypeSelectProps {
  subTypeName: string
  checked: boolean
  showTypeIcon?: boolean
  onChange: (checked: boolean) => void
}

export const SubtypeSelect: FC<SubtypeSelectProps> = ({
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
          {pluralize(capitalize(subTypeName))}
        </Typography>
      </Box>
      <Switch
        name={subTypeName}
        size={Size.SMALL}
        checked={checked}
        color="primary"
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
        type && theme.palette.activityTypes[type],
    },
  })
)

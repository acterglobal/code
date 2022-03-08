import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Typography } from '@material-ui/core'

import { Switch } from '@acter/components/atoms/fields/switch'
import { ResultDisplayType } from '@acter/lib/constants'

export interface ShowMapSwitchProps {
  resultDisplayType: ResultDisplayType
  onChange: (newResultsDisplayType: ResultDisplayType) => void
}

export const ShowMapSwitch: FC<ShowMapSwitchProps> = ({
  resultDisplayType,
  onChange,
}) => {
  const classes = useStyles()

  return (
    <Box className={classes.showMapSwitch}>
      <Typography className={classes.label} variant="body2">
        Show Map
      </Typography>
      <Switch
        name="showOnMap"
        checked={resultDisplayType === ResultDisplayType.MAP}
        onChange={(checked) =>
          onChange(checked ? ResultDisplayType.MAP : ResultDisplayType.LIST)
        }
      />
    </Box>
  )
}

const useStyles = makeStyles(() =>
  createStyles({
    showMapSwitch: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    label: {
      paddingRight: '.5em',
    },
  })
)

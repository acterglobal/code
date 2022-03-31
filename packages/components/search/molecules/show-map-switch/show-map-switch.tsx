import React, { FC } from 'react'

import { Box, createStyles, makeStyles, Typography } from '@material-ui/core'

import { Switch } from '@acter/components/atoms/fields/switch'
import { useSearchVariables } from '@acter/components/contexts/search-variables'
import { ResultDisplayType } from '@acter/lib/constants'
import { useTranslation } from '@acter/lib/i18n/use-translation'

export interface ShowMapSwitchProps {
  resultDisplayType: ResultDisplayType
  onChange: (newResultsDisplayType: ResultDisplayType) => void
}

export const ShowMapSwitch: FC<ShowMapSwitchProps> = ({
  resultDisplayType,
  onChange,
}) => {
  const { t } = useTranslation('search')
  const classes = useStyles()
  const [searchVariables, setSearchVariables] = useSearchVariables()

  const handleChange = (checked: boolean) => {
    if (checked) {
      setSearchVariables({
        ...searchVariables,
        north: null,
        east: null,
        south: null,
        west: null,
      })
      onChange(ResultDisplayType.MAP)
      return
    }

    setSearchVariables({
      ...searchVariables,
      north: undefined,
      east: undefined,
      south: undefined,
      west: undefined,
    })
    onChange(ResultDisplayType.LIST)
  }

  return (
    <Box className={classes.showMapSwitch}>
      <Typography className={classes.label} variant="body2">
        {t('showOnMap')}
      </Typography>
      <Switch
        name="showOnMap"
        checked={resultDisplayType === ResultDisplayType.MAP}
        onChange={handleChange}
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

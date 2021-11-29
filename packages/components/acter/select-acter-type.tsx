import React, { FC, useState } from 'react'

import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { ActerType } from '@acter/components/acter/acter-type'
import { Switch } from '@acter/components/styled/switch'
import { ActerTypes } from '@acter/lib/constants/acter-types'

const { ORGANISATION, NETWORK } = ActerTypes

export interface SelectActerTypeProps {
  onClick: (acterType: string) => void
}

export const SelectActerType: FC<SelectActerTypeProps> = ({ onClick }) => {
  const classes = useStyles()
  const [selectActerType, setSelectActerType] = useState(false)

  const handleChange = () => {
    setSelectActerType(!selectActerType)
  }

  return (
    <Box className={classes.container}>
      <Typography className={classes.header} variant="h5">
        + Add
      </Typography>
      <Box className={classes.caption}>
        <Typography variant="caption">
          Create an organisation or network on Acter to start coordinating or
          collaborating.
        </Typography>
      </Box>
      <Box className={classes.acters}>
        <ActerType acterType={ORGANISATION} onClick={onClick} />
        <ActerType acterType={NETWORK} onClick={onClick} />
        <Switch
          name="acterType"
          checked={selectActerType}
          onChange={handleChange}
        />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 650,
  },
  header: {
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    marginTop: theme.spacing(5),
  },
  caption: {
    textAlign: 'center',
    width: 300,
    margin: 'auto',
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(5),
  },
  acters: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
}))

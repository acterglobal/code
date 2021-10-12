import React, { FC } from 'react'

import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'

import { ActerType } from '@acter/components/acter/acter-type'
import { ActerTypes } from '@acter/lib/constants/acter-types'

const { ORGANISATION, NETWORK } = ActerTypes

export interface AddActerTypeProps {
  onClick: (acterType: string) => void
}

export const AddActerType: FC<AddActerTypeProps> = ({ onClick }) => {
  const classes = useStyles()

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

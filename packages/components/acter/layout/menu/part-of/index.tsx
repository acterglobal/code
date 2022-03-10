import React, { FC, useMemo } from 'react'

import { Divider, Theme, Typography } from '@mui/material';

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import { NetworksList } from '@acter/components/acter/layout/menu/part-of/list'
import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { useActer } from '@acter/lib/acter/use-acter'
import { ActerTypes } from '@acter/lib/constants'

const { ACTIVITY, GROUP, USER } = ActerTypes

export const PartOfSection: FC = () => {
  const classes = useStyles()

  const { acter } = useActer({ fetchParent: true })

  const followingActers = useMemo(
    () =>
      excludeActerTypes(
        acter?.Following.map(({ Following }) => Following),
        [ACTIVITY, USER, GROUP]
      ),
    [acter?.Following]
  )

  if (!acter || followingActers.length <= 0) return null

  return (
    <>
      <Divider className={classes.divider} />

      <Typography className={classes.heading} variant="caption">
        Part of
      </Typography>

      <NetworksList followingActers={followingActers} />
    </>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      marginTop: theme.spacing(1),
    },
    heading: {
      marginLeft: theme.spacing(2),
      fontWeight: theme.typography.fontWeightLight,
      color: theme.palette.secondary.contrastText,
    },
  })
)

import React, { FC, useMemo } from 'react'

import {
  createStyles,
  Divider,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core'

import { NetworksList } from '@acter/components/acter/layout/menu/part-of/list'
import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

const { ACTIVITY, GROUP, USER } = ActerTypes

export interface PartOfSectionProps {
  acter: Acter
}

export const PartOfSection: FC<PartOfSectionProps> = ({ acter }) => {
  const classes = useStyles()

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

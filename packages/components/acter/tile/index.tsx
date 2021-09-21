import React, { FC } from 'react'

import { Box } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { ActerImage } from '@acter/components/acter/tile/acter-image'
import { ActerTileInfo } from '@acter/components/acter/tile/info-section'
import { ActerTileInterests } from '@acter/components/acter/tile/interests-section'
import { Acter, InterestType } from '@acter/schema'

export interface ActerTileProps {
  acter: Acter
  interestTypes: InterestType[]
}

export const ActerTile: FC<ActerTileProps> = ({ acter, interestTypes }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <ActerImage acter={acter} />

      <ActerTileInfo acter={acter} />

      <ActerTileInterests acter={acter} interestTypes={interestTypes} />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(1),
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: theme.spacing(1),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        width: 300,
      },
    },
  })
)

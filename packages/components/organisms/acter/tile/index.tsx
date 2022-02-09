import React, { FC } from 'react'

import { Box, Hidden } from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

import { ActerProfileImage } from '@acter/components/atoms/acter/profile-image'
import { InterestsSection } from '@acter/components/interests/interests-section'
import { ActerTileInfo } from '@acter/components/organisms/acter/tile-info'
import { Acter } from '@acter/schema'

export interface ActerTileProps {
  acter: Acter
}

export const ActerTile: FC<ActerTileProps> = ({ acter }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Hidden xsDown>
        <ActerProfileImage acter={acter} />
      </Hidden>

      <ActerTileInfo acter={acter} />

      <Hidden smDown>
        <Box className={classes.interests}>
          <InterestsSection
            selected={acter.ActerInterests?.map(({ Interest }) => Interest)}
          />
        </Box>
      </Hidden>
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
    },
    interests: {
      height: '100%',
      width: 310,
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
)

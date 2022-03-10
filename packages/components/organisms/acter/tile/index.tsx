import React, { FC } from 'react'

import { Box, Hidden } from '@mui/material'
import { Theme } from '@mui/material/styles'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

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
    <Box className={classes.acterTile}>
      <Hidden xsDown>
        <ActerProfileImage acter={acter} />
      </Hidden>

      <Box className={classes.info}>
        <ActerTileInfo acter={acter} />
      </Box>

      <Hidden mdDown>
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
    acterTile: {
      backgroundColor: 'white',
      borderRadius: theme.spacing(1),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1),
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
    avatar: {
      flex: '0 0',
      width: 96,
    },
    info: {
      flex: '2 1',
    },
    interests: {
      flex: '0 0',
      height: '100%',
      minWidth: 310,
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  })
)

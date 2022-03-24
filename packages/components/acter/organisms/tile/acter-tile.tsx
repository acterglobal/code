import React, { FC, useMemo } from 'react'

import { Box, Typography, Hidden, styled } from '@material-ui/core'

import { MiniFollowingList } from '@acter/components/acter/molecules/mini-following-list/mini-following-list'
import { ActerTypeDisplay } from '@acter/components/acter/molecules/type-display'
import { ActerProfileImage } from '@acter/components/atoms/acter/profile-image'
import { InterestsSection } from '@acter/components/interests/interests-section'
import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

const { ACTIVITY, GROUP, USER } = ActerTypes

export interface ActerTileProps {
  acter: Acter
}

export const ActerTile: FC<ActerTileProps> = ({ acter }) => {
  const following = useMemo(
    () =>
      excludeActerTypes(
        acter?.Following.map(({ Following }) => Following),
        [ACTIVITY, USER, GROUP]
      ),
    [acter?.Following]
  )

  return (
    <ActerTileContainer>
      <Hidden xsDown>
        <ActerProfileImage acter={acter} />
      </Hidden>

      <ActerTileInfoContainer>
        <ActerTypeDisplay acterType={acter.ActerType} />

        <ActerName variant="subtitle1">{acter.name}</ActerName>
        <ActerLocation variant="body2" gutterBottom>
          {acter.location}
        </ActerLocation>
        <ActerDescription>
          <Typography variant="caption">{acter.description}</Typography>
        </ActerDescription>
        <MiniFollowingList following={following} />
      </ActerTileInfoContainer>

      <Hidden smDown>
        <InterestsContainer>
          <InterestsSection
            selected={acter.ActerInterests?.map(({ Interest }) => Interest)}
          />
        </InterestsContainer>
      </Hidden>
    </ActerTileContainer>
  )
}

const ActerTileContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: theme.spacing(1),
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(1),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}))

const ActerTileInfoContainer = styled(Box)(({ theme }) => ({
  color: theme.colors.grey.dark,
  display: 'flex',
  flex: '2 1',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.down('xs')]: {
    overflow: 'hidden',
  },
}))

const ActerName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: 0,
  lineHeight: 1,
}))

const ActerLocation = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightLight,
  fontSize: 13,
}))

const ActerDescription = styled(Box)(({ theme }) => ({
  display: 'flex',
  maxHeight: 40,
  minWidth: 400,
  color: theme.colors.black,
  lineClamp: 2,
  wordBreak: 'keep-all',
  overflow: 'hidden',
  marginRight: theme.spacing(0.5),
  alignItems: 'flex-start',
}))

const InterestsContainer = styled(Box)(({ theme }) => ({
  flex: '0 0',
  height: '100%',
  minWidth: 336,
  marginTop: theme.spacing(1),
  marginRight: theme.spacing(1),
}))

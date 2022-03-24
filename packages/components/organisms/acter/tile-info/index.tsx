import React, { FC, useMemo } from 'react'

import { Box, Typography, styled } from '@material-ui/core'

import { MiniFollowingList } from '@acter/components/acter/molecules/mini-following-list/mini-following-list'
import { ActerTypeDisplay } from '@acter/components/acter/molecules/type-display'
import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

const { ACTIVITY, GROUP, USER } = ActerTypes
export interface ActerTileInfoProps {
  acter: Acter
}

export const ActerTileInfo: FC<ActerTileInfoProps> = ({ acter }) => {
  const following = useMemo(
    () =>
      excludeActerTypes(
        acter?.Following.map(({ Following }) => Following),
        [ACTIVITY, USER, GROUP]
      ),
    [acter?.Following]
  )

  return (
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
  )
}

const ActerTileInfoContainer = styled(Box)(({ theme }) => ({
  width: 400,
  color: theme.colors.grey.dark,
  display: 'flex',
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
  color: theme.colors.black,
  display: 'flex',
  lineClamp: 2,
  wordBreak: 'keep-all',
  overflow: 'hidden',
  marginRight: theme.spacing(0.5),
  maxHeight: 40,
  alignItems: 'flex-start',
}))

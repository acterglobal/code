import React, { FC } from 'react'

import { Box, styled } from '@material-ui/core'

import { ActerAvatar } from '@acter/components/acter/avatar'
import { Acter } from '@acter/schema'

export interface ActerMiniAvatarTitleProps {
  acter: Acter
}

export const ActerMiniAvatarTitle: FC<ActerMiniAvatarTitleProps> = ({
  acter,
}) => (
  <ActerMiniAvatarTitleContainer>
    <ActerAvatar size={2.3} acter={acter} />
    <ActerTitle>{acter.name}</ActerTitle>
  </ActerMiniAvatarTitleContainer>
)

const ActerMiniAvatarTitleContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
})

const ActerTitle = styled(Box)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: '0.75rem',
  marginLeft: theme.spacing(0.5),
  color: theme.colors.grey.dark,
}))

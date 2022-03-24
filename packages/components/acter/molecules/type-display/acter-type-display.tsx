import React, { FC } from 'react'

import { Box, styled, Typography } from '@material-ui/core'

import { Image } from '@acter/components/util/image'
import { getActerTypeIcon } from '@acter/lib/images/get-icons'
import { capitalize } from '@acter/lib/string/capitalize'
import { ActerType } from '@acter/schema'

export interface ActerTypeDisplayProps {
  acterType: ActerType
}

export const ActerTypeDisplay: FC<ActerTypeDisplayProps> = ({ acterType }) => {
  if (!acterType) return null

  const { name } = acterType

  return (
    <ActerTypesContainer>
      <Image src={getActerTypeIcon(name)} alt={name} width={20} height={20} />
      <ActerTypeName variant="body2">{capitalize(name)}</ActerTypeName>
    </ActerTypesContainer>
  )
}

const ActerTypesContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(1),
}))

const ActerTypeName = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightLight,
  fontSize: 13,
  marginLeft: theme.spacing(1),
}))

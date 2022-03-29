import React, { FC } from 'react'

import { Box, styled } from '@material-ui/core'

import { ActerMiniAvatarTitle } from '@acter/components/acter/molecules/mini-avatar-title'
import { Link } from '@acter/components/util/anchor-link'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { Acter } from '@acter/schema'

export interface FollowingListProps {
  following: Acter[]
}

export const MiniFollowingList: FC<FollowingListProps> = ({ following }) => {
  if (following.length < 1) return null
  const { t } = useTranslation('common')

  return (
    <FollowingListContainer>
      <Box>{t('partOf')}</Box>
      <FollowingListItems>
        {following.map((following) => (
          <Link
            key={`acter-${following.id}`}
            href={acterAsUrl({ acter: following })}
          >
            <ActerMiniAvatarTitle acter={following} />
          </Link>
        ))}
      </FollowingListItems>
    </FollowingListContainer>
  )
}

const FollowingListContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontStyle: 'italic',
  fontSize: '.75rem',
}))

const FollowingListItems = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  '& > *': {
    marginRight: theme.spacing(1),
  },
}))

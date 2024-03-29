import React, { FC, useEffect, useMemo, useRef } from 'react'

import { Box, Typography, Hidden, styled } from '@material-ui/core'

import clsx from 'clsx'

import { MiniFollowingList } from '@acter/components/acter/molecules/mini-following-list/mini-following-list'
import { ActerTypeDisplay } from '@acter/components/acter/molecules/type-display'
import { ActerProfileImage } from '@acter/components/atoms/acter/profile-image'
import { InterestsSection } from '@acter/components/interests/interests-section'
import { SanitizedContent } from '@acter/components/molecules/sanitized-content'
import { excludeActerTypes } from '@acter/lib/acter/exclude-acter-types'
import { ActerTypes } from '@acter/lib/constants'
import { Acter } from '@acter/schema'

const { ACTIVITY, GROUP, USER } = ActerTypes

export interface ActerTileProps {
  acter: Acter
  collapsed?: boolean
  active?: boolean
}

export const ActerTile: FC<ActerTileProps> = ({ acter, collapsed, active }) => {
  const ref = useRef<HTMLDivElement>()
  const following = useMemo(
    () =>
      excludeActerTypes(
        acter?.Following.map(({ Following }) => Following),
        [ACTIVITY, USER, GROUP]
      ),
    [acter?.Following]
  )

  useEffect(() => {
    if (active && ref?.current)
      ref.current.scrollIntoView({ behavior: 'smooth' })
  }, [active])

  const collapsedClass = collapsed ? 'collapsed' : ''

  return (
    <div ref={ref}>
      <ActerTileContainer className={clsx(collapsedClass, active && 'hovered')}>
        <AvatarTitleDescriptionContainer>
          <Hidden xsDown>
            <ActerProfileImage acter={acter} />
          </Hidden>

          <ActerTileInfoContainer>
            <ActerTypeDisplay acterType={acter.ActerType} />

            <ActerName variant="subtitle1">{acter.name}</ActerName>
            <ActerLocation variant="body2" gutterBottom>
              {acter.location}
            </ActerLocation>

            {acter?.description && (
              <ActerDescription className={collapsedClass}>
                <ActerDescriptionText acter={acter} />
              </ActerDescription>
            )}

            <MiniFollowingList following={following} />
          </ActerTileInfoContainer>
        </AvatarTitleDescriptionContainer>

        {acter?.description && (
          <ActerDescriptionCollapsed className={collapsedClass}>
            <ActerDescriptionText acter={acter} />
          </ActerDescriptionCollapsed>
        )}

        <InterestsContainer>
          <InterestsSection
            selected={acter.ActerInterests?.map(({ Interest }) => Interest)}
          />
        </InterestsContainer>
      </ActerTileContainer>
    </div>
  )
}

const ActerTileContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  height: 'fit-content',
  justifyContent: 'space-between',
  overflow: 'hidden',
  backgroundColor: 'white',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'all .25s',
  position: 'relative',
  '&:hover, &.hovered': {
    boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)',
    top: '3px',
    left: '3px',
  },
  '&.collapsed': {
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    flexDirection: 'row',
  },
}))

const AvatarTitleDescriptionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
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
  maxHeight: 37,
  color: theme.colors.black,
  lineClamp: 2,
  wordBreak: 'keep-all',
  overflow: 'hidden',
  marginRight: theme.spacing(0.5),
  alignItems: 'flex-start',
  '&.collapsed': {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

const ActerDescriptionCollapsed = styled(ActerDescription)(({ theme }) => ({
  display: 'none',
  '&.collapsed': {
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))

const ActerDescriptionText: FC<{ acter: Acter }> = ({ acter }) => (
  <Typography variant="caption">
    <SanitizedContent isMarkdown={acter.isMarkDown}>
      {acter.description}
    </SanitizedContent>
  </Typography>
)

const InterestsContainer = styled(Box)(({ theme }) => ({
  flex: '0 0',
  height: '100%',
  width: '100%',
  marginTop: theme.spacing(1),
  marginRight: theme.spacing(1),
  display: 'none',
  '&.collapsed': {
    minWidth: 'auto',
    margin: `${theme.spacing(1)} auto 0`,
  },
  [theme.breakpoints.up('sm')]: {
    display: 'block',
    minWidth: 336,
  },
}))

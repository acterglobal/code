import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Box, createStyles, withStyles, Theme } from '@material-ui/core'

import { FollowersAvatars } from '@acter/components/acter/followers-avatars'
import { Header } from '@acter/components/acter/landing-page/info-section/header'
import { LoadingSpinner } from '@acter/components/atoms/loading/spinner'
import { InterestsSection } from '@acter/components/interests/interests-section'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'

export const InfoSection: FC = () => {
  const router = useRouter()
  const { acter, fetching: acterLoading } = useActer()

  if (!acter || acterLoading) return <LoadingSpinner />

  const handleOnAvatarClick = () =>
    router.push(`${acterAsUrl({ acter, extraPath: ['members'] })}`)

  return (
    <InfoSectionContainer>
      <Box>
        <Header
          title={acter.name}
          description={acter.description}
          isMarkDown={acter.isMarkDown}
        />
      </Box>
      <Box>
        <InterestsSection
          selected={acter.ActerInterests?.map(({ Interest }) => Interest)}
        />
      </Box>
      <Box>
        <FollowersAvatars acter={acter} onAvatarClick={handleOnAvatarClick} />
      </Box>
    </InfoSectionContainer>
  )
}

const InfoSectionContainer = withStyles((theme: Theme) =>
  createStyles({
    root: {
      //TODO: make this reusable
      backgroundColor: theme.colors.white,
      borderColor: theme.palette.divider,
      borderWidth: 'thin',
      borderStyle: 'solid',
      borderRadius: theme.spacing(1),
      padding: theme.spacing(2),
      '& > *': {
        marginBottom: theme.spacing(2),
      },
    },
  })
)(Box)

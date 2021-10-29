import React, { FC } from 'react'
import { di } from 'react-magnetic-di/macro'

import { useRouter } from 'next/router'

import { Box, createStyles, withStyles, Theme } from '@material-ui/core'

import { FollowersAvatars } from '@acter/components/acter/followers-avatars'
import { Header } from '@acter/components/acter/landing-page/info-section/header'
import { InterestsSection } from '@acter/components/interests/interests-section'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { useActer } from '@acter/lib/acter/use-acter'

export const InfoSection: FC = () => {
  di(useActer)
  const router = useRouter()
  const { acter, fetching: acterLoading } = useActer()

  if (!acter || acterLoading) return <LoadingSpinner />

  const handleOnAvatarClick = () =>
    router.push(`${acterAsUrl({ acter, extraPath: ['members'] })}`)

  return (
    <InfoSectionContainer>
      <Box>
        <Header title={acter.name} description={acter.description} />
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
      backgroundColor: theme.palette.background.paper,
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

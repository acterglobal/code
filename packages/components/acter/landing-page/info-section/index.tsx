import React, { FC } from 'react'

import { useRouter } from 'next/router'

import { Box, createStyles, withStyles, Theme } from '@material-ui/core'

import { FollowersAvatars } from '@acter/components/acter/followers-avatars'
import { Header } from '@acter/components/acter/landing-page/info-section/header'
import { InterestsSection } from '@acter/components/interests/interests-section'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { Acter, InterestType } from '@acter/schema'

export interface InfoSectionProps {
  acter: Acter
  interestTypes: InterestType[]
}

export const InfoSection: FC<InfoSectionProps> = ({ acter, interestTypes }) => {
  const router = useRouter()
  const handleOnAvatarClick = () =>
    router.push(`${acterAsUrl({ acter, extraPath: ['members'] })}`)

  return (
    <InfoSectionContainer>
      <Box>
        <Header title={acter.name} description={acter.description} />
      </Box>
      <Box>
        <InterestsSection
          interestTypes={interestTypes}
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

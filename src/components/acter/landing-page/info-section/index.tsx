import React, { FC } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { Header } from 'src/components/acter/landing-page/info-section/header'
import { FollowersAvatars } from 'src/components/acter/followers-avatars'
import { InterestsSection } from 'src/components/interests/interests-section'

import { Acter, InterestType } from '@generated/type-graphql'
export interface InfoSectionProps {
  acter: Acter
  interestTypes: InterestType[]
}

export const InfoSection: FC<InfoSectionProps> = ({ acter, interestTypes }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Header title={acter.name} description={acter.description} />
        <InterestsSection
          interestTypes={interestTypes}
          selected={acter.ActerInterests.map(({ Interest }) => Interest)}
        />
        <FollowersAvatars acter={acter} />
      </CardContent>
    </Card>
  )
}

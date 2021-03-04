import React, { FC } from 'react'
import { Card, CardContent } from '@material-ui/core'
import { Header } from 'src/components/acter/landing-page/info-section/header'
import { FollowersAvatars } from 'src/components/acter/followers-avatars'

import { Acter } from '@generated/type-graphql'
interface InfoSectionProps {
  acter: Acter
}

export const InfoSection: FC<InfoSectionProps> = ({ acter }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Header title={acter.name} description={acter.description} />
        <FollowersAvatars acter={acter} />
      </CardContent>
    </Card>
  )
}

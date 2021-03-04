import React, { FC } from 'react'
import { Card, CardContent } from '@material-ui/core'
import Header from 'src/components/acter/landing-page/info-section/header'
import { AvatarList } from 'src/components/acter/landing-page/info-section/avatar-list'

import { Acter } from '@generated/type-graphql'
interface InfoSectionProps {
  acter: Acter
}

export const InfoSection: FC<InfoSectionProps> = ({ acter }) => {
  const users = acter.Followers.filter(
    ({ Follower }) => Follower.ActerType.name === 'user'
  ).map(({ Follower }) => Follower)
  const organizations = acter.Followers.filter(
    ({ Follower }) => Follower.ActerType.name === 'organization'
  ).map(({ Follower }) => Follower)
  return (
    <Card variant="outlined">
      <CardContent>
        <Header title={acter.name} description={acter.description} />
        <AvatarList title="People" acters={users} />
        <AvatarList title="Organizations" acters={organizations} />
      </CardContent>
    </Card>
  )
}

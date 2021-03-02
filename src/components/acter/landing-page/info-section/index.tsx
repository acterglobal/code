import React, { FC } from 'react'
import { Card, CardContent } from '@material-ui/core'
import Header from 'src/components/acter/landing-page/info-section/header'
import { People as PeopleSection } from 'src/components/acter/landing-page/info-section/people'
import { Organizations } from 'src/components/acter/landing-page/info-section/organizations'

import { Acter } from '@generated/type-graphql'
interface InfoSectionProps {
  acter: Acter
}

export const InfoSection: FC<InfoSectionProps> = ({ acter }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Header title={acter.name} description={acter.description} />
        {/* <InterestsSection /> */}
        <PeopleSection numOfPeople={20} imageURL={[]} />
        <Organizations imageURL={[]} />
      </CardContent>
    </Card>
  )
}

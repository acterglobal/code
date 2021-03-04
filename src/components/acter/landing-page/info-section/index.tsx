import React, { FC } from 'react'
import { Card, CardContent } from '@material-ui/core'
import Header from 'src/components/acter/landing-page/info-section/header'
import { People as PeopleSection } from 'src/components/acter/landing-page/info-section/people'
import { Organisations } from 'src/components/acter/landing-page/info-section/organisations'

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
        <Organisations imageURL={[]} />
      </CardContent>
    </Card>
  )
}

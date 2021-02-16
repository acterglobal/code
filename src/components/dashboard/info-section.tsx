import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Card, CardContent } from '@material-ui/core'
import Header from './info-section/header'
import PeopleSection from './info-section/people'
import Organzations from './info-section/organizations'

import { Acter } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 500,
  },
}))

interface InfoSectionProps {
  acter: Acter
}

export const InfoSection: FC<InfoSectionProps> = ({ acter }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Header title={acter.name} description={acter.description} />
        {/* <InterestsSection /> */}
        <PeopleSection numOfPeople={20} imageURL={[]} />
        <Organzations imageURL={[]} />
      </CardContent>
    </Card>
  )
}

export default InfoSection

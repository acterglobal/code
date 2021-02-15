import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Card, CardContent } from '@material-ui/core'
// import InterestsSection from '../interests/interests-section'
import Header from './info-section/header'
import PeopleSection from './info-section/people'
import Organzations from './info-section/organizations'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 500,
  },
}))

const InfoSection: FC = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Header
          title="Greenlight Aarhus"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vero
          omnis perferendis cupiditate quidem! Commodi cum alias, asperiores nam
          voluptatibus ratione eos, animi libero culpa odio expedita, totam
          dolorum. Facilis."
        />
        {/* <InterestsSection /> */}
        <PeopleSection numOfPeople={20} imageURL={[]} />
        <Organzations imageURL={[]} />
      </CardContent>
    </Card>
  )
}

export default InfoSection

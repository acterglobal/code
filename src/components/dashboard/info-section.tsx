import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Card, CardContent, Typography } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import AvatarGroup from '@material-ui/lab/AvatarGroup'
import Focus from './focus'
import { Approach } from '../interests/approach'
import { ExampleApproach } from 'src/__fixtures__'
import Tag from './tag'
import { Interests } from '../../__fixtures__/interest/interests'

const chipData = [
  {
    title: 'Climate change',
    type: 'Environment',
    numOfPeople: 3,
  },
  {
    title: 'Curruption',
    type: 'Social',
    numOfPeople: 43,
  },
  {
    title: 'Waste',
    type: 'Economy',
    numOfPeople: 43,
  },
  {
    title: 'education',
    type: 'Social',
    numOfPeople: 43,
  },
  {
    title: 'air',
    type: 'Environment',
    numOfPeople: 43,
  },
  {
    title: 'consumption',
    type: 'Economy',
    numOfPeople: 43,
  },
  {
    title: 'clean oceans',
    type: 'Environment',
    numOfPeople: 43,
  },
]

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    maxWidth: 500,
  },
  title: {
    fontSize: '1.6rem',
    marginBottom: '20px',
  },
  description: {
    fontSize: 12,
    lineHeight: 1.8,
    marginBottom: '20px',
  },
  chipsSection: {
    display: 'flex',
    width: '100%',
    marginBottom: '20px',
  },
  section: {
    fontSize: '0.8rem',
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
  organizations: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  organization: {
    border: '2px solid ',
  },
}))

const InfoSection: FC = () => {
  const classes = useStyles()

  // const interestTypesData = Interests.data.interestTypes.filter(
  //   ({ name }) =>
  //     name === 'Economy' || name === 'Environment' || name === 'Social'
  // )
  // console.log(interestTypesData)

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h3" className={classes.title}>
          Greenlight Aarhus
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.description}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos vero
          omnis perferendis cupiditate quidem! Commodi cum alias, asperiores nam
          voluptatibus ratione eos, animi libero culpa odio expedita, totam
          dolorum. Facilis.
        </Typography>
        <Box className={classes.chipsSection}>
          <Box>
            <Typography variant="h5" className={classes.section}>
              FOCUS
            </Typography>
            {chipData.map((data) => (
              <Focus chipContent={data} />
            ))}
            {/* {interestTypesData.map((type) =>
              type.Interests.map((interest) => (
                <Focus chipContent={{ ...interest, type: type.name }} />
              ))
            )} */}
          </Box>
          <Box>
            <Typography variant="h5" className={classes.section}>
              APPROACH
            </Typography>

            <Approach interest={ExampleApproach} />
            <Approach interest={ExampleApproach} />
            <Approach interest={ExampleApproach} />
            <Approach interest={ExampleApproach} />
            <Approach interest={ExampleApproach} />
            <Approach interest={ExampleApproach} />
          </Box>
          <Box>
            <Typography variant="h5" className={classes.section}>
              TAGS
            </Typography>
            {chipData.map((data) => (
              <Tag chipContent={data} />
            ))}
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" className={classes.section}>
            People (20)
          </Typography>
          <AvatarGroup max={4}>
            <Avatar
              alt="Remy Sharp"
              src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
            />
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            <Avatar
              alt="Agnes Walker"
              src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
            />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </AvatarGroup>
        </Box>
        <Box>
          <Typography variant="h5" className={classes.section}>
            Orgoanizations
          </Typography>
          <Box className={classes.organizations}>
            <Avatar
              className={classes.organization}
              alt="Remy Sharp"
              src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
            />
            <Avatar
              className={classes.organization}
              alt="Travis Howard"
              src="/static/images/avatar/2.jpg"
            />
            <Avatar
              className={classes.organization}
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
            />
            <Avatar
              className={classes.organization}
              alt="Agnes Walker"
              src="https://res.cloudinary.com/dfglnmgmx/image/upload/v1612887008/IMG_1971_qnods9.jpg"
            />
            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default InfoSection

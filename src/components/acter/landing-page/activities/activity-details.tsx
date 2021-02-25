import React, { FC } from 'react'
import Image from 'next/image'
import { Modal } from 'src/components/util/modal/modal'
import { ExampleActiivity } from 'src/__fixtures__/activity/example-activity'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { green, grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: 750,
    backgroundColor: '#F2F2F2',
    borderRadius: '10px 10px 0px 0px',
  },
  image: {
    borderRadius: '10px 10px 0px 0px',
  },
  activityInfo: {
    padding: 20,
    height: 120,
  },
  date: {
    color: green[500],
    fontWeight: 'bolder',
    fontSize: '0.9rem',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  location: {
    color: grey[800],
    fontSize: '0.9rem',
    fontWeight: 'lighter',
  },
}))

export const ActivityDetails = () => {
  const classes = useStyles()
  const activity = { ...ExampleActiivity }

  return (
    <Modal>
      <Box className={classes.container}>
        <Image
          className={classes.image}
          src={activity.image}
          alt="Picture of activity"
          width={750}
          height={250}
        />
        <Box className={classes.activityInfo}>
          <Typography className={classes.date} variant="subtitle1">
            {`${activity.startDate} - ${activity.endDate}`}
          </Typography>
          <Typography className={classes.title} variant="h3">
            {activity.title}
          </Typography>
          <Typography className={classes.location} variant="body2">
            {activity.location}
          </Typography>
        </Box>
      </Box>
    </Modal>
  )
}

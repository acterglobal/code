import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'

import Image from 'next/image'

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight: 200,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
  },
  image: {
    height: 100,
    backgroundColor: 'blue',
    borderRadius: '10px 10px 0 0',
  },
  info: {
    // margin: 20,
    padding: 30,
  },
  dateTime: {
    fontSize: '0.6rem',
    fontWeight: 'lighter',
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  location: {
    fontSize: '0.6rem',
    fontWeight: 'lighter',
  },
})

export const Activity: FC = () => {
  const classes = useStyles()
  const activity = {
    name: 'Online event',
    dateTime: '19 MAR 17.00',
    location: 'Online',
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.image}>
        {/* <Image
        loader={() =>
          `https://res.cloudinary.com/dfglnmgmx/image/upload/v1614186352/acter/activity-example.png`
        }
        src="/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      /> */}
      </Box>
      <Box className={classes.info}>
        <Typography className={classes.dateTime} variant="subtitle1">
          {activity.dateTime}
        </Typography>
        <Typography className={classes.name} variant="h6">
          {activity.name}
        </Typography>
        <Typography className={classes.location} variant="subtitle1">
          {activity.location}
        </Typography>
      </Box>
    </Box>
  )
}

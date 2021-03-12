import React, { FC } from 'react'
import Image from 'next/image'
import moment from 'moment'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import { Activity } from '@generated/type-graphql'
import { getImageUrl } from 'src/lib/images/get-image-url'
import { DATE_FORMAT_SHORT } from 'src/constants'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#F2F2F2',
      borderRadius: theme.spacing(2),
      overflow: 'hidden',
      width: 200,
      height: 200,
    },
    image: {
      height: 100,
      position: 'relative',
    },
    info: {
      padding: theme.spacing(1),
      overflowY: 'scroll',
      height: 100,
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
)

export interface ActivityTileProps {
  activity: Activity
}

export const ActivityTile: FC<ActivityTileProps> = ({ activity }) => {
  if (!activity.id) return null
  const classes = useStyles()
  const startAt = moment(activity.startAt).format(DATE_FORMAT_SHORT)
  const endAt = moment(activity.endAt).format(DATE_FORMAT_SHORT)
  return (
    <Box className={classes.root}>
      <Box className={classes.image}>
        <Image
          src={getImageUrl(activity.Acter.bannerUrl, 'banner')}
          alt={activity.Acter.name}
          layout="fill"
        />
      </Box>

      <Box className={classes.info}>
        <Typography className={classes.dateTime} variant="subtitle1">
          {startAt}
        </Typography>
        <Typography className={classes.name} variant="h6">
          {activity.Acter.name}
          {activity.Acter.name}
          {activity.Acter.name}
          {activity.Acter.name}
          {activity.Acter.name}
          {activity.Acter.name}
          {activity.Acter.name}
          {activity.Acter.name}
          {activity.Acter.name}
        </Typography>
        <Typography className={classes.location} variant="subtitle1">
          {activity.Acter.location}
        </Typography>
      </Box>
    </Box>
  )
}

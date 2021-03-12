import React, { FC } from 'react'
import Link from 'next/link'
import moment from 'moment'
import {
  Computer,
  Edit as EditIcon,
  LocationOnOutlined,
  Event as CalanderIcon,
} from '@material-ui/icons'
import { Box, IconButton, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { green, grey } from '@material-ui/core/colors'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'

import { Acter, User } from '@generated/type-graphql'

const useStyles = makeStyles((theme: Theme) => ({
  activityInfo: {
    padding: '20px 20px 20px 30px',
    // height: 120,
    backgroundColor: 'white',
  },
  dateContainer: {
    display: 'flex',
    color: green[500],
  },
  date: {
    fontWeight: 'bolder',
    fontSize: '0.8rem',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    margin: '3px 0px 3px 0px',
  },
  editIcon: {
    fontSize: '1.2rem',
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    color: grey[800],
  },
  location: {
    fontSize: '0.9rem',
    fontWeight: 'lighter',
  },
  onlineLink: {
    fontSize: '0.9rem',
    fontWeight: 'lighter',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
  },
}))

const momentFormat = 'llll'

export interface ActivityInfoProps {
  acter: Acter
  user: User
}

export const ActivityInfo: FC<ActivityInfoProps> = ({ acter, user }) => {
  const classes = useStyles()
  const startAt = moment(acter.Activity.startAt)
  const endAt = moment(acter.Activity.endAt)

  const getUrl = (url) => {
    if (url.indexOf('http://') == 0 || url.indexOf('https://') == 0) {
      return url
    }
    return `https://${url}`
  }

  return (
    <Box className={classes.activityInfo}>
      <Box className={classes.dateContainer}>
        <CalanderIcon style={{ fontSize: '1.3rem', marginRight: 5 }} />
        <Typography className={classes.date} variant="subtitle1">
          {`${startAt.format(momentFormat)} - ${endAt.format(momentFormat)}`}
        </Typography>
      </Box>
      <Box className={classes.titleContainer}>
        <Typography className={classes.title} variant="h3">
          {acter.name}
        </Typography>
        {acter.createdByUserId === user?.id && (
          <Link href={`${acterAsUrl(acter)}/edit`}>
            <IconButton>
              <EditIcon className={classes.editIcon} />
            </IconButton>
          </Link>
        )}
      </Box>
      <Box className={classes.locationContainer}>
        {acter.Activity.isOnline ? (
          <>
            <Computer style={{ fontSize: '1.3rem', marginRight: 5 }} />
            <Link href={getUrl(acter.url)}>
              <Typography className={classes.onlineLink} variant="body2">
                {acter.url}
              </Typography>
            </Link>
          </>
        ) : (
          <>
            <LocationOnOutlined
              style={{ fontSize: '1.3rem', marginRight: 5 }}
            />
            <Typography className={classes.location} variant="body2">
              {acter.location}
            </Typography>
          </>
        )}
      </Box>
    </Box>
  )
}

import React, { FC } from 'react'
import Link from 'next/link'
import moment from 'moment'
import {
  Computer,
  Delete as DeleteIcon,
  Edit as EditIcon,
  LocationOnOutlined,
  Event as CalanderIcon,
} from '@material-ui/icons'
import { Box, IconButton, Hidden, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { green, grey } from '@material-ui/core/colors'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'
import { DATE_FORMAT, DATE_FORMAT_NO_TIME } from 'src/constants'
import { Connect, ConnectProps } from 'src/components/acter/connect'
import { About } from 'src/components/activity/about'

const useStyles = makeStyles((theme: Theme) => ({
  activityInfo: {
    padding: '20px 20px 20px 30px',
    [theme.breakpoints.down('xs')]: {
      padding: '15px 5px 5px 10px',
    },
    // height: 120,
    backgroundColor: 'white',
  },
  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    color: green[500],
  },
  calanderIcon: {
    fontSize: '1.3rem',
    marginRight: 5,
    [theme.breakpoints.down('xs')]: {
      marginRight: 3,
    },
  },
  date: {
    fontWeight: 'bolder',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.4rem',
    margin: '3px 3px 3px 0px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
    },
  },
  iconButton: {
    [theme.breakpoints.down('xs')]: {
      padding: 0,
    },
  },
  icon: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
    },
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    color: grey[800],
  },
  location: {
    fontSize: '0.9rem',
    fontWeight: 'lighter',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
    },
  },
  onlineLink: {
    fontSize: '0.9rem',
    fontWeight: 'lighter',
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  titleAndJoinContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export type ActivityInfoProps = ConnectProps

export const ActivityInfo: FC<ActivityInfoProps> = (props) => {
  const { acter, user } = props
  const classes = useStyles()

  const format = acter.Activity.isAllDay ? DATE_FORMAT_NO_TIME : DATE_FORMAT

  const startAt = moment(acter.Activity.startAt).format(format)
  const endAt = moment(acter.Activity.endAt).format(format)

  const getUrl = (url) => {
    if (!url) {
      return ''
    }

    if (url.match(/^https?:\/\//)) {
      return url
    }

    return `http://${url}`
  }

  return (
    <Box className={classes.activityInfo}>
      <Box className={classes.dateContainer}>
        <CalanderIcon className={classes.calanderIcon} />
        <Typography className={classes.date} variant="subtitle1">
          {startAt === endAt ? startAt : `${startAt} - ${endAt}`}
        </Typography>
      </Box>
      <Box className={classes.titleAndJoinContainer}>
        <Box className={classes.titleContainer}>
          <Typography className={classes.title} variant="h3">
            {acter.name}
          </Typography>
          {acter.createdByUserId === user?.id && (
            <>
              <Link href={`${acterAsUrl(acter)}/edit`}>
                <IconButton className={classes.iconButton}>
                  <EditIcon className={classes.icon} />
                </IconButton>
              </Link>
              <Link href={`${acterAsUrl(acter)}/delete`}>
                <IconButton className={classes.iconButton}>
                  <DeleteIcon className={classes.icon} />
                </IconButton>
              </Link>
            </>
          )}
        </Box>
        <Connect {...props} />
      </Box>
      <Box className={classes.locationContainer}>
        {acter.Activity.isOnline && acter.url && (
          <>
            <Computer
              style={{ fontSize: '1.3rem', marginRight: 5, color: green[500] }}
            />
            <a
              href={getUrl(acter.url)}
              className={classes.onlineLink}
              target="_blank"
            >
              <Typography className={classes.location} variant="body2">
                {acter.url}
              </Typography>
            </a>
          </>
        )}
        {!acter.Activity.isOnline && acter.location && (
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
      <Hidden smUp>
        <About acter={acter} />
      </Hidden>
    </Box>
  )
}

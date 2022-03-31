import React, { FC } from 'react'

import { useRouter } from 'next/router'

import {
  Box,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { TopBar } from '@acter/components/activity/landing-page/header-section/top-bar'
import { ActivityLocationIcon } from '@acter/components/icons'
import { Link } from '@acter/components/util/anchor-link'
import { Image } from '@acter/components/util/image'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { getActerDateFormat } from '@acter/lib/acter/get-acter-date-format'
import { getRootParentActer } from '@acter/lib/acter/get-root-parent-acter'
import { ActerMenu } from '@acter/lib/constants'
import { parseAndFormat } from '@acter/lib/datetime/parse-and-format'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { Acter } from '@acter/schema'

const { ACTIVITIES } = ActerMenu

interface HeaderSectionProps {
  acter: Acter
}

export const HeaderSection: FC<HeaderSectionProps> = ({ acter }) => {
  const router = useRouter()
  const classes = useStyles()

  const displayFormat = getActerDateFormat(acter)

  const startAt = parseAndFormat({
    dateString: acter?.Activity?.startAt,
    formatString: displayFormat,
    currentLocale: router.locale,
  })
  const endAt = parseAndFormat({
    dateString: acter?.Activity?.endAt,
    formatString: displayFormat,
    currentLocale: router.locale,
  })

  const parentActer = getRootParentActer(acter)

  const handleCloseActivity = () => {
    acter &&
      router.push(acterAsUrl({ acter: parentActer, extraPath: [ACTIVITIES] }))
  }

  const getUrl = (url) => {
    if (!url) return ''

    if (url.match(/^https?:\/\//)) return url

    return `http://${url}`
  }

  return (
    <Box className={classes.bannerSection}>
      <TopBar acter={acter} handleCloseActivity={handleCloseActivity} />
      <Image
        src={getImageUrl(acter.bannerUrl, 'banner')}
        alt="Acter Logo"
        height={407}
        banner
      />
      <Box className={classes.infoSection}>
        <Box className={classes.activityInfo}>
          <Typography className={classes.date} variant="subtitle1">
            {startAt === endAt ? startAt : `${startAt} - ${endAt}`}
          </Typography>
          <Typography
            role="acter-name"
            variant="h5"
            className={classes.acterName}
          >
            {acter.name}
          </Typography>
        </Box>

        <Box className={classes.locationInfo}>
          <ActivityLocationIcon />
          {acter.Activity.isOnline && acter.url && (
            <Link href={getUrl(acter.url)} target="_blank">
              <Typography className={classes.location} variant="subtitle2">
                {acter.url}
              </Typography>
            </Link>
          )}
          {!acter.Activity.isOnline && acter.location && (
            <Typography
              role="acter-location"
              variant="subtitle2"
              className={classes.location}
            >
              {acter.location}
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bannerSection: {
      width: '100%',
      backgroundColor: theme.colors.grey.extraLight,
      marginBottom: theme.spacing(1),
    },
    infoSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: 0,
      paddingTop: 0,
      paddingLeft: theme.spacing(5.2),
      paddingBottom: theme.spacing(0.5),
      flexGrow: 2,
      [theme.breakpoints.down('xs')]: {
        alignItems: 'center',
        paddingBottom: theme.spacing(1),
      },
    },
    activityInfo: {
      marginLeft: 5,
    },
    date: {
      color: theme.colors.blue.light,
      fontSize: '1.5rem',
    },
    acterName: {
      color: theme.palette.secondary.main,
      fontSize: '1.3rem',
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem',
      },
    },
    locationInfo: {
      display: 'flex',
      flexDirection: 'row',
    },
    location: {
      color: theme.colors.blue.light,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem',
      },
      marginLeft: theme.spacing(0.3),
      marginTop: 3,
    },
  })
)

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
import { Image } from '@acter/components/util/image'
import { acterAsUrl } from '@acter/lib/acter/acter-as-url'
import { getActerDateFormat } from '@acter/lib/acter/get-acter-date-format'
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

  const startAt = parseAndFormat(acter?.Activity?.startAt, displayFormat)
  const endAt = parseAndFormat(acter?.Activity?.endAt, displayFormat)

  const handleCloseActivity = () => {
    acter &&
      router.push(acterAsUrl({ acter: acter?.Parent, extraPath: [ACTIVITIES] }))
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
        <Box className={classes.avatarImage} border={2}>
          <Image
            src={getImageUrl(acter.avatarUrl, 'avatar')}
            alt="Acter Logo"
            height={126}
          />
        </Box>

        <Box className={classes.info}>
          <Box>
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
            <Box className={classes.infoDescription}>
              <ActivityLocationIcon />
              <Typography
                role="acter-location"
                variant="subtitle2"
                className={classes.location}
              >
                {acter.location}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bannerSection: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(2),
    },
    infoSection: {
      display: 'flex',
      height: '90px',
      alignItems: 'flex-end',
      paddingBottom: theme.spacing(1.0),
      [theme.breakpoints.down('xs')]: {
        alignItems: 'center',
        paddingBottom: theme.spacing(1),
      },
    },
    avatarImage: {
      borderRadius: '50%',
      backgroundColor: theme.colors.white,
      borderColor: theme.palette.secondary.main,
      marginLeft: theme.spacing(6) + 2,
      width: 130,
      height: 130,
      objectFit: 'cover',
      overflow: 'hidden',
      zIndex: 99,
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(1),
        width: 60,
        height: 60,
      },
    },
    info: {
      display: 'flex',
      marginLeft: theme.spacing(2),
      flexGrow: 2,
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing(1),
      },
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
    infoDescription: {
      display: 'flex',
      flexDirection: 'row',
    },
    location: {
      color: theme.colors.blue.light,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem',
      },
      marginLeft: theme.spacing(0.5),
      marginTop: 3,
    },
  })
)

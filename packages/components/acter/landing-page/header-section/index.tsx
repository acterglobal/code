import React, { FC } from 'react'
import { di } from 'react-magnetic-di/macro'

import Image from 'next/image'

import {
  Box,
  Hidden,
  Typography,
  createStyles,
  makeStyles,
  useMediaQuery,
  Theme,
} from '@material-ui/core'

import { Connect } from '@acter/components/acter/connect'
import { ActionButtons } from '@acter/components/acter/landing-page/header-section/action-buttons'
import { AddInviteSection } from '@acter/components/acter/landing-page/header-section/add-invite'
import { FeatureFlag } from '@acter/components/util/feature-flag'
import { LoadingSpinner } from '@acter/components/util/loading-spinner'
import { useActer } from '@acter/lib/acter/use-acter'
import { getImageUrl } from '@acter/lib/images/get-image-url'

export const HeaderSection: FC = () => {
  di(useActer)
  const classes = useStyles()
  const smallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('xs')
  )

  const avatarDims = smallScreen ? 65 : 140

  const { acter, fetching: acterLoading } = useActer()

  if (acterLoading) return <LoadingSpinner />
  if (!acter) return null

  return (
    <Box className={classes.bannerSection}>
      <Image
        src={getImageUrl(acter.bannerUrl, 'banner')}
        alt="Acter Logo"
        layout="intrinsic"
        height={400}
        width={1920}
      />
      <Box className={classes.infoSection}>
        <Box className={classes.avatarImage} border={2}>
          <Image
            src={getImageUrl(acter.avatarUrl, 'avatar')}
            alt="Acter Logo"
            layout="intrinsic"
            height={avatarDims}
            width={avatarDims}
          />
        </Box>

        <Box className={classes.info}>
          <Box>
            <Typography
              role="acter-name"
              variant="h5"
              className={classes.title}
            >
              {acter.name}
            </Typography>
            <Typography
              role="acter-location"
              variant="subtitle2"
              className={classes.location}
            >
              {acter.location}
            </Typography>
          </Box>

          <Hidden xsDown>
            <ActionButtons />
          </Hidden>
        </Box>

        <Box className={classes.buttonContainer}>
          <FeatureFlag>
            <AddInviteSection />
          </FeatureFlag>
          <Connect />
        </Box>
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bannerSection: {
      backgroundColor: theme.palette.background.paper,
      marginBottom: theme.spacing(2),
    },
    infoSection: {
      display: 'flex',
      height: '80px',
      alignItems: 'flex-end',
      paddingBottom: theme.spacing(3),
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
    title: {
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem',
      },
    },
    location: {
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
      },
    },
    buttonContainer: {
      display: 'flex',
      fontSize: '.8rem',
      marginRight: theme.spacing(3),
    },
  })
)

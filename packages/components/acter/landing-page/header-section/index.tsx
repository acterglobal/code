import React, { FC } from 'react'

import {
  Box,
  Hidden,
  Typography,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core'

import { Connect } from '@acter/components/acter/connect'
import { AddInviteSection } from '@acter/components/acter/landing-page/header-section/add-invite'
import { DeleteButton } from '@acter/components/acter/landing-page/header-section/delete-button'
import { EditButton } from '@acter/components/acter/landing-page/header-section/edit-button'
import { Image } from '@acter/components/util/image'
import { useTranslation } from '@acter/lib/i18n/use-translation'
import { getImageUrl } from '@acter/lib/images/get-image-url'
import { capitalize } from '@acter/lib/string/capitalize'
import { Acter } from '@acter/schema'

export interface HeaderSectionProps {
  acter: Acter
}

export const HeaderSection: FC<HeaderSectionProps> = ({ acter }) => {
  const classes = useStyles()
  const { t } = useTranslation('common')

  return (
    <Box className={classes.bannerSection}>
      <Image
        src={getImageUrl(acter?.bannerUrl, 'banner')}
        alt="Acter Logo"
        height={300}
        banner
      />
      <Box className={classes.infoSection}>
        <Box className={classes.avatarImage} border={2}>
          <Image
            src={getImageUrl(acter?.avatarUrl, 'avatar')}
            alt="Acter Logo"
            height={126}
          />
        </Box>

        <Box className={classes.info}>
          <Box>
            <Typography
              role="acter-name"
              variant="h5"
              className={classes.title}
            >
              {acter?.name}
            </Typography>
            <Box className={classes.infoDescription}>
              <Typography
                role="acter-type"
                variant="subtitle2"
                className={classes.acterType}
              >
                {capitalize(t(`acterTypes.${acter?.ActerType.name}`))}
              </Typography>
              {'-'}
              <Typography
                role="acter-location"
                variant="subtitle2"
                className={classes.location}
              >
                {acter?.location}
              </Typography>
            </Box>
          </Box>

          <Hidden xsDown>
            <Box>
              <EditButton />
              <DeleteButton />
            </Box>
          </Hidden>
        </Box>

        <Box className={classes.buttonContainer}>
          <AddInviteSection />
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
      width: '100%',
    },
    infoSection: {
      display: 'flex',
      height: '80px',
      alignItems: 'flex-end',
      paddingBottom: theme.spacing(2.2),
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
    infoDescription: {
      display: 'flex',
      flexDirection: 'row',
    },
    acterType: {
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
      },
      marginRight: theme.spacing(0.5),
    },
    location: {
      color: theme.palette.secondary.dark,
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
      },
      marginLeft: theme.spacing(0.5),
    },
    buttonContainer: {
      display: 'flex',
      fontSize: '.8rem',
      marginRight: theme.spacing(3),
    },
  })
)

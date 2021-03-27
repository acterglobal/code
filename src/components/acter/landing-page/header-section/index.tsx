import React, { FC } from 'react'
import Link from 'next/link'
import {
  Box,
  IconButton,
  Typography,
  createStyles,
  makeStyles,
  useMediaQuery,
  Theme,
} from '@material-ui/core'
import { Delete as DeleteIcon, Edit as EditIcon } from '@material-ui/icons'
import Image from 'next/image'
import { Connect, ConnectProps } from 'src/components/acter/connect'
import { AddActivityButton } from 'src/components/activity/add-activity-button'
import { getImageUrl } from 'src/lib/images/get-image-url'
import { acterAsUrl } from 'src/lib/acter/acter-as-url'

//  ? custom styles
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
    },
    avatarImage: {
      borderRadius: theme.spacing(2),
      borderColor: theme.palette.primary.main,
      marginLeft: theme.spacing(6) + 2,
      width: 130,
      height: 130,
      objectFit: 'cover',
      overflow: 'hidden',
      zIndex: 99,
      [theme.breakpoints.down('sm')]: {
        width: 60,
        height: 60,
      },
    },
    info: {
      display: 'flex',
      marginLeft: theme.spacing(2),
      flexGrow: 2,
    },
    title: {
      fontWeight: 'bold',
    },
    location: {
      color: theme.palette.secondary.dark,
    },
    buttonContainer: {
      display: 'flex',
      fontSize: '.8rem',
    },
  })
)
export type HeaderSectionProps = ConnectProps

export const HeaderSection: FC<HeaderSectionProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
  loading,
}) => {
  const classes = useStyles()
  const smallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('sm')
  )

  const avatarDims = smallScreen ? 65 : 140

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
          <Box>
            {acter.createdByUserId === user?.id && (
              <>
                <Link href={`${acterAsUrl(acter)}/edit`}>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Link>
                <Link href={`${acterAsUrl(acter)}/delete`}>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </Link>
              </>
            )}
          </Box>
        </Box>
        <Box className={classes.buttonContainer}>
          <AddActivityButton acter={acter} user={user} />
          <Connect
            acter={acter}
            user={user}
            onJoin={onJoin}
            onLeave={onLeave}
            loading={loading}
          />
        </Box>
      </Box>
    </Box>
  )
}

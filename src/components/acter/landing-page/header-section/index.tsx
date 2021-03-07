import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import Image from 'next/image'
import { Connect, ConnectProps } from 'src/components/acter/connect'

//  ? custom styles
const useStyles = makeStyles((theme: Theme) => ({
  bannerSection: {},
  infoSection: {
    display: 'flex',
    height: '80px',
    alignItems: 'center',
  },
  avatarImage: {
    borderRadius: 16,
    borderColor: theme.palette.primary.main,
    backgroundColor: 'white',
    marginLeft: '40px',
    marginTop: -75,
    zIndex: 99,
  },

  info: {
    marginLeft: theme.spacing(2),
  },
  title: {
    fontWeight: 'bold',
  },
  location: {
    color: theme.palette.secondary.dark,
  },
}))
export type HeaderSectionProps = ConnectProps

export const HeaderSection: FC<HeaderSectionProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
  loading,
}) => {
  const classes = useStyles()

  /* load default images if doesn't have avatar and banner does not exist */
  if (!acter.avatarUrl) {
    acter.avatarUrl = 'assets/default-avatar.png'
  }
  if (!acter.bannerUrl) {
    acter.bannerUrl = 'assets/default-banner.jpeg'
  }

  return (
    <Box className={classes.bannerSection}>
      <Image
        src={`${acter.bannerUrl}`}
        alt="Acter Logo"
        layout="intrinsic"
        height={400}
        width={1920}
      />
      <Box className={classes.infoSection}>
        <Box className={classes.avatarImage} border={2}>
          <Image
            src={`${acter.avatarUrl}`}
            alt="Acter Logo"
            layout="fixed"
            height={130}
            width={130}
          />
        </Box>

        <Box className={classes.info}>
          <Typography role="acter-name" variant="h5" className={classes.title}>
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
        <Box style={{ marginLeft: 'auto' }}>
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

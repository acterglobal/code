import React, { FC } from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { Box, Typography } from '@material-ui/core'
import Image from 'next/image'
import {
  MembershipButton,
  MembershipButtonProps,
} from 'src/components/acter/landing-page/membership-button'
import { Acter, User } from '@generated/type-graphql'

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
  joinBtn: {
    borderRadius: 25,
    width: '100px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    marginRight: theme.spacing(3),
    textTransform: 'none',
  },
}))

export type HeaderSectionProps = MembershipButtonProps

export const HeaderSection: FC<HeaderSectionProps> = ({
  acter,
  user,
  onJoin,
  onLeave,
}) => {
  const classes = useStyles()
  return (
    <Box className={classes.bannerSection}>
      <Image
        src={`https://acter.ams3.cdn.digitaloceanspaces.com/${acter.bannerUrl}`}
        alt="Acter Logo"
        layout="intrinsic"
        height={400}
        width={1920}
      />
      <Box className={classes.infoSection}>
        <Box className={classes.avatarImage} border={2}>
          <Image
            src={`https://acter.ams3.cdn.digitaloceanspaces.com/${acter.avatarUrl}`}
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
          <MembershipButton
            acter={acter}
            user={user}
            onJoin={onJoin}
            onLeave={onLeave}
          />
        </Box>
      </Box>
    </Box>
  )
}

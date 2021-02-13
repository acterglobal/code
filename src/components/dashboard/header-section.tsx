import React, { FC } from 'react'
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles'
import { Box, Typography as MUIT, Button } from '@material-ui/core'
import Image from 'next/image'
import Avatar from '../profile/avatar'
import { Acter } from '@generated/type-graphql'
import {
  getBannerImageUrl,
  getAvtarImageUrl,
} from '../../__fixtures__/acter/example-acter'

// ? overriding the MaterialUI tab styles
const Typography = withStyles((theme: Theme) =>
  createStyles({
    h4: {
      fontWeight: 'bold',
    },
  })
)(MUIT)

//  ? custom styles
const useStyles = makeStyles((theme: Theme) => ({
  bannerSection: {
    position: 'relative',
  },
  infoSection: {
    display: 'flex',
    // backgroundColor: 'blue',
    height: '80px',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  info: {
    margin: '0px',
    marginLeft: '190px',
  },
  title: {
    fontSize: '1.4rem',
  },
  location: {
    color: theme.palette.secondary.dark,
  },
  joinBtn: {
    borderRadius: 25,
    width: '100px',
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    marginRight: '40px',
    textTransform: 'none',
  },
}))

export interface HeaderSectionProps {
  imageSrc?: string
  acter: Acter
}

// const myLoader = () =>
//   `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612781078/acter/top-banner.png`

const HeaderSection: FC<HeaderSectionProps> = ({ acter }) => {
  const classes = useStyles()
  return (
    <Box className={classes.bannerSection}>
      <Image
        loader={() => getBannerImageUrl()}
        src={'/acter-logo-144.png'}
        alt="Acter Logo"
        layout="intrinsic"
        height={400}
        width={1920}
      />
      <Box className={classes.infoSection}>
        <Avatar imageUrl={getAvtarImageUrl()} />

        <Box className={classes.info}>
          <Typography variant="h4" className={classes.title}>
            {acter.name}
          </Typography>
          <Typography variant="subtitle2" className={classes.location}>
            {acter.location}
          </Typography>
        </Box>
        <Box>
          <Button
            className={classes.joinBtn}
            variant="contained"
            size="medium"
            disableElevation
            onClick={() => console.log('join button clicked')}
          >
            Join
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default HeaderSection

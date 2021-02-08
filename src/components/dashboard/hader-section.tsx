import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Box, Typography, Button } from '@material-ui/core'

import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
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
  avatarImage: {
    position: 'absolute',
    border: '2',
    borderColor: theme.palette.primary.main,
    cursor: 'pointer',
    backgroundColor: 'white',
    marginLeft: '40px',
    top: '15vw',
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
}

const myLoader = () =>
  `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612781078/acter/top-banner.png`

const HeaderSection: FC<HeaderSectionProps> = ({ imageSrc }) => {
  const classes = useStyles()
  return (
    <Box className={classes.bannerSection}>
      <Image
        loader={myLoader}
        src={imageSrc || '/acter-logo-144.png'}
        alt="Acter Logo"
        layout="intrinsic"
        height={400}
        width={1920}
      />
      <Box className={classes.infoSection}>
        <Box border={2} borderRadius={16} className={classes.avatarImage}>
          <Image
            loader={() =>
              `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612778108/acter/acter-logo-144.png`
            }
            src={imageSrc || '/acter-logo-144.png'}
            alt="Acter Logo"
            layout="intrinsic"
            height={130}
            width={130}
          />
        </Box>
        <Box className={classes.info}>
          <Typography variant="h4" className={classes.title}>
            Greenlight Aarhus
          </Typography>
          <Typography variant="subtitle2" className={classes.location}>
            Aarhus Denmark
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

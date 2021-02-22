import React, { FC } from 'react'
import {
  makeStyles,
  createStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles'
import { Box, Typography as MUIT, Button } from '@material-ui/core'
import Image from 'next/image'
import { Acter } from '@generated/type-graphql'

// ? overriding the MaterialUI tab styles
const Typography = withStyles(() =>
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
  acter: Acter
}

export const HeaderSection: FC<HeaderSectionProps> = ({ acter }) => {
  const classes = useStyles()
  return (
    <Box className={classes.bannerSection}>
      <Image
        loader={() =>
          `https://acter.ams3.cdn.digitaloceanspaces.com/${acter.bannerUrl}`
        }
        src={'/acter-logo-144.png'}
        alt="Acter Logo"
        layout="intrinsic"
        height={400}
        width={1920}
      />
      <Box className={classes.infoSection}>
        <Box className={classes.avatarImage} border={2} borderRadius={16}>
          <Image
            src={`https://acter.ams3.cdn.digitaloceanspaces.com/${acter.avatarUrl}`}
            alt="Acter Logo"
            layout="intrinsic"
            height={130}
            width={130}
          />
        </Box>

        <Box className={classes.info}>
          <Typography role="acter-name" variant="h4" className={classes.title}>
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

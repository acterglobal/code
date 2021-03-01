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
      // fontWeight: 'bold',
    },
  })
)(MUIT)

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
    marginTop: -85,
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
    marginRight: theme.spacing(2),
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

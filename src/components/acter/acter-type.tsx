import React, { FC } from 'react'
import Image from 'next/image'
import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { KeyboardArrowRightRounded } from '@material-ui/icons'
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    border: '1px solid gray',
    borderRadius: 8,
    height: 65,
    margin: 15,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  title: {
    marginLeft: 20,
    fontSize: '0.8rem',
    fontWeight: 'bold',
    lineHeight: 0.9,
  },
  caption: {
    marginLeft: 20,
    fontSize: '0.6rem',
    // color: theme.palette.secondary.main,
  },
  icon: {
    color: theme.palette.secondary.main,
    position: 'absolute',
    right: 20,
    fontSize: 40,
    cursor: 'pointer',
  },
}))

export interface ActerTypeProps {
  acterType: string
}

const myLoader = ({ src, width, quality }) => {
  return `https://res.cloudinary.com/dfglnmgmx/image/upload/v1612778108/acter/acter-logo-32.png`
}

export const ActerType: FC<ActerTypeProps> = ({ acterType }) => {
  const classes = useStyles()
  const caption =
    acterType === 'organisation'
      ? `Eg: NGO's, Movements, Companies, Public organisations`
      : `Eg: Network, Platforms, Clusters`

  const handleClick = () => {
    console.log('Clicked')
  }

  return (
    <div className={classes.container}>
      {
        // TODO: fix the next/image below
        /* <Image
        loader={myLoader}
        src="acter-logo-32.png"
        alt="organisation"
        width={20}
        height={20}
      /> */
      }
      <img
        src={`/${acterType}-logo.webp`}
        height={45}
        style={{ marginLeft: 20 }}
      />
      <Box>
        <Typography className={classes.title} variant="h6">
          Create {acterType}
        </Typography>
        <Typography className={classes.caption} variant="caption">
          {caption}
        </Typography>
      </Box>
      <KeyboardArrowRightRounded
        fontSize="inherit"
        className={classes.icon}
        onClick={handleClick}
      />
    </div>
  )
}

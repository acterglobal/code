import React, { FC } from 'react'

import { LocationOnOutlined } from '@mui/icons-material'
import { Box, Theme, Typography } from '@mui/material'
import createStyles from '@mui/styles/createStyles'
import makeStyles from '@mui/styles/makeStyles'

import { Acter } from '@acter/schema'

export interface ActerLocationProps {
  acter: Acter
}

export const ActerLocation: FC<ActerLocationProps> = ({
  acter: { location, placeId },
}) => {
  const classes = useStyles()

  const Wrapper: FC = ({ children }) => {
    if (placeId) {
      return (
        <a
          className={classes.container}
          href={`https://www.google.com/maps/search/?api=1&query=${location}&query_place_id=${placeId}`}
          target="_blank"
        >
          {children}
        </a>
      )
    }
    return <Box className={classes.container}>{children}</Box>
  }

  return (
    <Wrapper>
      <LocationOnOutlined className={classes.locationIcon} />
      <Typography className={classes.location} variant="body2">
        {location}
      </Typography>
    </Wrapper>
  )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      color: 'black',
      textDecoration: 'none',
      display: 'inline-flex',
    },
    locationIcon: {
      fontSize: '1.3rem',
      marginRight: 5,
    },
    locationContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    location: {
      fontSize: '0.9rem',
      fontWeight: theme.typography.fontWeightLight,
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
      },
    },
  })
)

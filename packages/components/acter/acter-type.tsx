import React, { FC } from 'react'

import Image from 'next/image'

import { Box, Typography } from '@material-ui/core'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { KeyboardArrowRightRounded } from '@material-ui/icons'

import { ActerTypes } from '@acter/lib/constants'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    border: '1px solid gray',
    borderRadius: 8,
    height: 65,
    margin: 15,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
  },
  title: {
    marginLeft: 20,
    fontSize: '0.8rem',
    fontWeight: theme.typography.fontWeightBold,
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
  onClick: (acterType: string) => void
}

export const ActerType: FC<ActerTypeProps> = ({ acterType, onClick }) => {
  const classes = useStyles()
  //TODO: read this from DB
  const caption =
    acterType === ActerTypes.ORGANISATION
      ? `Eg: NGO's, Movements, Companies, Public organisations`
      : `Eg: Network, Platforms, Clusters`

  return (
    <Box className={classes.container} onClick={() => onClick(acterType)}>
      <Box style={{ marginLeft: 20 }}>
        <Image src={`assets/${acterType}-logo.png`} width={45} height={45} />
      </Box>
      <Box
        id={acterType === ActerTypes.ORGANISATION ? 'organisation' : 'network'}
      >
        <Typography className={classes.title} variant="h6">
          Create {acterType}
        </Typography>
        <Typography className={classes.caption} variant="caption">
          {caption}
        </Typography>
      </Box>
      <KeyboardArrowRightRounded fontSize="inherit" className={classes.icon} />
    </Box>
  )
}
